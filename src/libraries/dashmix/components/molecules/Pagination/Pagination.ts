// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixButton } from '../../atoms/Button'
import { DashmixIconName } from '../../atoms/Icon'
import { DashmixSelect } from '../../atoms/Select'

import { dashmixPaginationProps, useDashmixPagination } from './Pagination.hooks'
import { DashmixPaginationProps } from './Pagination.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixPagination = defineComponent({
  name: 'DashmixPagination',
  components: { DashmixButton, DashmixSelect },
  props: dashmixPaginationProps,
  emits: ['update:currentPage', 'update:perPage'],

  setup (props: DashmixPaginationProps, ctx: SetupContext) {
    return { ...useDashmixPagination(props, ctx), DashmixIconName }
  },

  template: `
    <nav class="pagination-container">

    <slot name="default">
      <div class="left-group">
        <div class="page-counter">
          {{ _currentPage }} z {{ pagesTotal }}
        </div>

        <div>
          <DashmixButton theme="dark" variant="icon" :icon="DashmixIconName.ChevronLeftSolid"
                         class="mr-1 mr-lg-3"
                         @click="prevPage" :disabled="!canGoBack" />
          <DashmixButton theme="dark" variant="icon" :icon="DashmixIconName.ChevronRightSolid"
                         @click="nextPage" :disabled="!canGoFurther" />
        </div>

        <div class="divider" />

        <DashmixSelect :model.sync="_perPage" :options="perPageOptions" withDynamicPosition />
      </div>
    </slot>

    <slot name="right">
      <div class="right-group">
        Wszystkich wpisów:&nbsp;<b>{{ itemsTotal }}</b>
      </div>
    </slot>

    </nav>
  `
})
