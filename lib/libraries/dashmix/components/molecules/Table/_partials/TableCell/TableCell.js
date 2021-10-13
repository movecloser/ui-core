"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTableCell = void 0;
const composition_api_1 = require("@vue/composition-api");
const TableCell_hooks_1 = require("./TableCell.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
exports.DashmixTableCell = composition_api_1.defineComponent({
    name: 'DashmixTableCell',
    props: TableCell_hooks_1.dashmixTableCellProps,
    setup(props) {
        const { gridColumnEnd } = TableCell_hooks_1.useDashmixTableCell(props);
        return { gridColumnEnd };
    },
    template: `
    <div class="row__cell" :class="className" :style="{ gridColumnEnd }">
    <slot />
    </div>
  `
});
