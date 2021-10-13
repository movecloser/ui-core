"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTableRow = void 0;
const composition_api_1 = require("@vue/composition-api");
const Table_1 = require("../../../../../../abstract/components/Table");
const Button_1 = require("../../../atoms/Button");
const Check_1 = require("../../../atoms/Check");
const Dropdown_1 = require("../../Dropdown");
const Icon_1 = require("../../../atoms/Icon");
const contracts_1 = require("../../../../contracts");
const TableCell_1 = require("./TableCell");
const TableRow_hooks_1 = require("./TableRow.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixTableRow = composition_api_1.defineComponent({
    name: 'DashmixTableRow',
    components: {
        DashmixButton: Button_1.DashmixButton,
        DashmixCheck: Check_1.DashmixCheck,
        DashmixDropdown: Dropdown_1.DashmixDropdown,
        DashmixDropdownItem: Dropdown_1.DashmixDropdownItem,
        DashmixTableCell: TableCell_1.DashmixTableCell
    },
    props: Table_1.tableRowProps,
    setup(props, ctx) {
        return { ...TableRow_hooks_1.useDashmixTableRow(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <div class="row no-gutters pl-2 pl-md-3"
         :class="{ 'selected': isSelected, 'disabled': !row.selectable }"
         :style="{ gridTemplateColumns: gridColumns }">

    <DashmixTableCell v-if="showSelection" className="d-none d-md-flex row__cell center">
      <DashmixCheck :id="'row-'+index" name="bulkItem" :model.sync="selected" :value="row.id"
                    theme="${contracts_1.DashmixTheme.Light}" :disabled="!row.selectable" />
    </DashmixTableCell>

    <slot>
      <DashmixTableCell v-for="(c, i) in row.data" :key="'cell'+i">{{ c }}</DashmixTableCell>
    </slot>

    <DashmixTableCell v-if="showActions && dropdownActions.length" className="action-cell center">
      <DashmixDropdown class="row__dropdown-button" align="right"
                       :icon="DashmixIconName.EllipsisVSolid"
                       triggerTheme="light" triggerSize="small">
        <slot name="actions" :actions="dropdownActions" :data="row.data">
          <DashmixDropdownItem v-for="(item, i) in dropdownActions" :key="'dropdown-' + i"
                               :item="item" />
        </slot>
      </DashmixDropdown>
    </DashmixTableCell>
    </div>
  `
});
