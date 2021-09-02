// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { usePagination } from '../../../../abstract'

import { BootstrapButton } from '../Button'

import { BootstrapPaginationProps } from './Pagination.contracts'
import { bootstrapPaginationProps } from './Pagination.hooks'

/**
 * @emits change - When the User calls for the page change.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapPagination = defineComponent({
  name: 'BootstrapPagination',
  props: bootstrapPaginationProps,
  components: { BootstrapButton },
  emits: ['change'],

  setup (props: BootstrapPaginationProps, ctx: SetupContext) {
    const {
      canGoBack,
      canGoNext,
      items,
      onNextPageClick,
      onDirectPageClick,
      onPrevPageClick
    } = usePagination(props, ctx)

    return {
      canGoBack,
      canGoNext,
      items,
      onNextPageClick,
      onDirectPageClick,
      onPrevPageClick
    }
  },

  template: `
    <nav :aria-label="$t('pagination.pagination')">
      <ul class="pagination list-unstyled">
        <li v-if="showDirectionButtons" class="page-item" :class="{ 'disabled': !canGoBack }">
          <BootstrapButton class="btn-link page-link" @click="onPrevPageClick"
                           :aria-label="$t('pagination.previous-page')"
                           :aria-disabled="canGoBack ? 'false' : 'true'">
            <span aria-hidden="true">&laquo;</span>
          </BootstrapButton>
        </li>

        <li v-for="(page, index) in items" :key="page + '-' + index"
            class="page-item" :class="{ 'active': page === currentPage }">
          <BootstrapButton class="btn-link page-link"
                           :class="{ 'disabled': typeof page === 'string' }"
                           @click="onDirectPageClick(page)">
            {{ page }}
          </BootstrapButton>
        </li>

        <li v-if="showDirectionButtons" class="page-item" :class="{ 'disabled': !canGoNext }">
          <BootstrapButton class="btn-link page-link" @click="onNextPageClick"
                           :aria-label="$t('pagination.next-page')"
                           :aria-disabled="canGoNext ? 'false' : 'true'">
            <span aria-hidden="true">&raquo;</span>
          </BootstrapButton>
        </li>
      </ul>
    </nav>
  `
})
