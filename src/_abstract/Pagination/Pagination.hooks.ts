// Copyright © 2021 Move Closer

import { computed, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'

import { AbstractPaginationProps, UsePaginationProvides } from './Pagination.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractPaginationProps: ComponentObjectPropsOptions<AbstractPaginationProps> = {
  currentPage: {
    type: Number,
    required: false,
    default: 1
  },

  totalPages: {
    type: Number,
    required: true
  },

  totalVisible: {
    type: Number,
    required: false
  },

  showDirectionButtons: {
    type: Boolean,
    required: false,
    default: true
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const usePagination = (
  props: AbstractPaginationProps,
  ctx: SetupContext
): UsePaginationProvides => {
  const { emit } = ctx

  /**
   * Emits the `@change` event with the passed-in page number as an event payload.
   *
   * @param page - The page that we want to go to.
   */
  const goToPage = (page: number): void => {
    emit('change', page)
  }

  /**
   * If the routing is possible, calls for the next page.
   */
  const goToNextPage = (): void => {
    if (props.currentPage < props.totalPages) {
      goToPage(props.currentPage + 1)
    }
  }

  /**
   * If the routing is possible, calls for the previous page.
   */
  const goToPrevPage = (): void => {
    if (props.currentPage > 0) {
      goToPage(props.currentPage - 1)
    }
  }

  /**
   * @author Vuetify
   *
   * @see https://github.com/vuetifyjs/vuetify/blob/6bb948463c2e9559d60f5f99e1208f79a0935b39/packages/vuetify/src/components/VPagination/VPagination.ts#L170
   */
  const range = (from: number, to: number) => {
    const range = []

    from = from > 0 ? from : 1

    for (let i = from; i <= to; i++) {
      range.push(i)
    }

    return range
  }

  /**
   * @see UsePaginationProvides.canGoBack
   */
  const canGoBack = computed<boolean>(() => props.currentPage > 1)

  /**
   * @see UsePaginationProvides.canGoNext
   */
  const canGoNext = computed<boolean>(() => props.currentPage < props.totalPages)

  /**
   * @author Vuetify
   *
   * @see UsePaginationProvides.items
   * @see https://github.com/vuetifyjs/vuetify/blob/6bb948463c2e9559d60f5f99e1208f79a0935b39/packages/vuetify/src/components/VPagination/VPagination.ts#L89
   */
  const items = computed<Array<string|number>>(() => {
    let totalVisible = props.totalVisible

    if (typeof totalVisible !== 'number') {
      totalVisible = props.totalPages
    }

    if (totalVisible === 0) {
      return []
    }

    const maxLength = Math.min(
      Math.max(0, totalVisible) || props.totalPages,
      props.totalPages
    )

    if (props.totalPages <= maxLength) {
      return range(1, props.totalPages)
    }

    const even = maxLength % 2 === 0 ? 1 : 0
    const left = Math.floor(maxLength / 2)
    const right = props.totalPages - left + 1 + even

    if (props.currentPage > left && props.currentPage < right) {
      const firstItem = 1
      const lastItem = props.totalPages
      const start = props.currentPage - left + 2
      const end = props.currentPage + left - 2 - even
      const secondItem = start - 1 === firstItem + 1 ? 2 : '...'
      const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...'

      return [1, secondItem, ...range(start, end), beforeLastItem, props.totalPages]
    } else if (props.currentPage === left) {
      const end = props.currentPage + left - 1 - even
      return [...range(1, end), '...', props.totalPages]
    } else if (props.currentPage === right) {
      const start = props.currentPage - left + 1
      return [1, '...', ...range(start, props.totalPages)]
    } else {
      return [
        ...range(1, left),
        '...',
        ...range(right, props.totalPages)
      ]
    }
  })

  /**
   * @see UsePaginationProvides.onNextPageClick
   */
  const onNextPageClick = (): void => {
    goToNextPage()
  }

  /**
   * @see UsePaginationProvides.onDirectPageClick
   */
  const onPageClick = (page: number): void => {
    if (
      typeof page !== 'number' ||
      page === props.currentPage ||
      page < 0 ||
      page > props.totalPages
    ) {
      return
    }

    goToPage(page)
  }

  /**
   * @see UsePaginationProvides.onPrevPageClick
   */
  const onPrevPageClick = (): void => {
    goToPrevPage()
  }

  return { canGoBack, canGoNext, items, onNextPageClick, onDirectPageClick: onPageClick, onPrevPageClick }
}
