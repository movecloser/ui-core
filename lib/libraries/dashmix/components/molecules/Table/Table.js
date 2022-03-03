"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTable = void 0;
const composition_api_1 = require("@vue/composition-api");
const Table_1 = require("../../../../../abstract/components/Table");
const contracts_1 = require("../../../contracts");
const Check_1 = require("../../atoms/Check");
const Icon_1 = require("../../atoms/Icon");
const FakeRow_1 = require("./_partials/FakeRow");
const TableCell_1 = require("./_partials/TableCell");
const TableRow_1 = require("./_partials/TableRow");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixTable = composition_api_1.defineComponent({
    name: 'DashmixTable',
    components: {
        DashmixCheck: Check_1.DashmixCheck,
        DashmixFakeRow: FakeRow_1.DashmixFakeRow,
        DashmixIcon: Icon_1.DashmixIcon,
        DashmixTableCell: TableCell_1.DashmixTableCell,
        DashmixTableRow: TableRow_1.DashmixTableRow
    },
    props: Table_1.tableProps,
    emits: ['do', 'selected', 'sortBy'],
    setup(props, ctx) {
        return {
            ...Table_1.useTable(props, ctx),
            DashmixIconName: Icon_1.DashmixIconName,
            direction: Table_1.SortDirectionMap
        };
    },
    template: `
    <div class="root custom">
    <div class="head pl-2 pl-md-3" :style="{ gridTemplateColumns: gridColumns }">

      <div v-if="showSelection" class="head__cell d-none d-md-flex center">
        <DashmixCheck name="bulkSelect" :model.sync="bulkSelection" mode="${contracts_1.DashmixTheme.Light}" />
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

    <template v-else-if="isEmpty && withEmptyRows">
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
});
