"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapTableCell = void 0;
const composition_api_1 = require("@vue/composition-api");
const TableCell_hooks_1 = require("./TableCell.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
exports.BootstrapTableCell = composition_api_1.defineComponent({
    name: 'BootstrapTableCell',
    props: TableCell_hooks_1.bootstrapTableCellProps,
    setup(props) {
        const { shouldRenderComponent } = TableCell_hooks_1.useBootstrapTableCell(props);
        return { shouldRenderComponent };
    },
    template: `
    <component v-if="shouldRenderComponent" :is="value" v-bind="{ index, item, value }" />
    <span v-else>{{ value }}</span>
  `
});
