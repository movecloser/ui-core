// Copyright © 2021 Move Closer

import { computed, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { DashmixPaginationProps } from './Pagination.contracts'
import { perPageOptions } from './Pagination.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixPaginationProps: ComponentObjectPropsOptions<DashmixPaginationProps> = {
  /**
   * Index of the currently-active page.
   */
  currentPage: {
    type: Number,
    required: true
  },

  /**
   * Total number (sum) of the items in the given collection.
   */
  itemsTotal: {
    type: Number,
    required: true
  },

  /**
   * Number of items per each page.
   */
  perPage: {
    type: Number,
    required: false,
    default: 25
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixPagination = (props: DashmixPaginationProps, ctx: SetupContext) => {
  // Extract the emit function.
  const { emit } = ctx

  /**
   * Synced reference to the `currentPage` prop.
   */
  const _currentPage = computed<number>({
    get (): number {
      return props.currentPage
    },
    set (value: number) {
      emit('update:currentPage', value)
    }
  })

  /**
   * Synced reference to the `perPage` prop.
   */
  const _perPage = computed<number>({
    get (): number {
      return props.perPage
    },
    set (value: number) {
      emit('update:perPage', value)
    }
  })

  /**
   * Total number of pages.
   */
  const pagesTotal = computed<number>(() => {
    return Math.ceil(props.itemsTotal / _perPage.value)
  })

  /**
   * Determines whether User can go to the next page.
   */
  const canGoBack = computed<boolean>(() => {
    return _currentPage.value > 1
  })

  /**
   * Determines whether User can go to the next page.
   */
  const canGoFurther = computed<boolean>(() => {
    return pagesTotal.value > _currentPage.value
  })

  /**
   * Proceeds to the next page.
   */
  const nextPage = (): void => {
    if (canGoFurther) {
      _currentPage.value++
    }
  }

  /**
   * Returns to the previous page.
   */
  const prevPage = (): void => {
    if (canGoBack) {
      _currentPage.value--
    }
  }

  return {
    _currentPage,
    _perPage,
    canGoBack,
    canGoFurther,
    nextPage,
    pagesTotal,
    perPageOptions,
    prevPage
  }
}
