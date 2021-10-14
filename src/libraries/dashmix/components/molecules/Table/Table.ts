// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import {
  SortDirectionMap,
  AbstractTableProps,
  tableProps,
  useTable
} from '../../../../../abstract/components/Table'

import { DashmixTheme } from '../../../contracts'

import { DashmixCheck } from '../../atoms/Check'
import { DashmixIcon, DashmixIconName } from '../../atoms/Icon'

import { DashmixFakeRow } from './_partials/FakeRow'
import { DashmixTableCell } from './_partials/TableCell'
import { DashmixTableRow } from './_partials/TableRow'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixTable = defineComponent({
  name: 'DashmixTable',
  components: {
    DashmixCheck,
    DashmixFakeRow,
    DashmixIcon,
    DashmixTableCell,
    DashmixTableRow
  },
  props: tableProps,
  emits: ['do', 'selected', 'sortBy'],

  setup (props: AbstractTableProps, ctx: SetupContext) {
    return {
      ...useTable(props, ctx),
      DashmixIconName,
      direction: SortDirectionMap
    }
  },

  template: `
    <div class="root custom">
    <div class="head pl-2 pl-md-3" :style="{ gridTemplateColumns: gridColumns }">

      <div v-if="showSelection" class="head__cell d-none d-md-flex center">
        <DashmixCheck name="bulkSelect" :model.sync="bulkSelection" mode="${DashmixTheme.Light}" />
      </div>

      <div v-for="(headElement, index) in head" :key="'table-head-'+index">
        <button v-if="headElement.sortable" class="head__cell sortable"
                @click="handleSort(headElement)">
          {{ headElement.label }}

          <div class="head__icons">
            <DashmixIcon
                v-if="!headElement.isSorted || headElement.isSorted && sortedBy.direction === direction.Asc"
                :icon="DashmixIconName.ChevronUpSolid"
                @click.native.stop="handleSort(headElement, headElement.isSorted ? direction.Desc : direction.Asc )" />

            <DashmixIcon
                v-if="!headElement.isSorted || headElement.isSorted && sortedBy.direction === direction.Desc"
                :icon="DashmixIconName.ChevronDownSolid"
                @click.native.stop="handleSort(headElement, headElement.isSorted ? direction.Asc : direction.Desc )" />
          </div>
        </button>

        <div v-else class="head__cell">{{ headElement.label }}</div>
      </div>

      <div v-if="showActions" class="head__cell action-cell center">Działanie</div>
    </div>

    <slot name="firstRow" v-bind="{ actions, gridColumns, showActions, showSelection }"
          v-if="!isLoading" />

    <template v-if="isLoading">
      <DashmixFakeRow :gridColumns="gridColumns" :showSelection="showSelection"
                      :head="head" :rowsCount="numberOfRows" :isLoading="isLoading" />
    </template>

    <template v-else-if="isEmpty">
      <!-- If table is empty render 2 empty rows and empty message -->
      <DashmixFakeRow :gridColumns="gridColumns" :showSelection="showSelection"
                      :head="head" :rowsCount="2" />
    </template>

    <slot name="emptyMessage" v-if="$slots.emptyMessage && isEmpty" />

    <DashmixTableRow v-if="!isLoading" v-for="(r, i) in rows" :key="'row-'+r.id+'-'+i" :index="i"
                     :class="{'row--no-bottom' : hideLastBorder}"
                     :row="r" :selectedRows.sync="selectedRows"
                     v-bind="{ actions, gridColumns, showActions, showSelection }"
                     @do="(payload) => $emit('do', payload)">

      <slot :data="r.data" />

      <template v-slot:actions="{ actions, data }">
        <slot name="actions" :actions="actions" :data="data" />
      </template>
    </DashmixTableRow>

    <slot name="lastRow" v-bind="{ gridColumns, showActions, showSelection }" v-if="!isLoading" />
    </div>
  `
})
