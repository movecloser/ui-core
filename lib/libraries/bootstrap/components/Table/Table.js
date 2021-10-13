"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapTable = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const partials_1 = require("./partials");
const Table_hooks_1 = require("./Table.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
exports.BootstrapTable = composition_api_1.defineComponent({
    name: 'BootstrapTable',
    components: { BTable: bootstrap_vue_1.BTable, BootstrapTableCell: partials_1.BootstrapTableCell },
    props: Table_hooks_1.bootstrapTableProps,
    setup() {
        const { composeSlotName } = Table_hooks_1.useBootstrapTable();
        return { composeSlotName };
    },
    template: `
    <BTable v-bind="{ fields, items }">
    <template v-for="field in fields" v-slot:[composeSlotName(field)]="{ index, item, value }">
      <BootstrapTableCell v-bind="{ index, item, value }" />
    </template>
    </BTable>
  `
});
