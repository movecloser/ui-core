"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixFakeRow = void 0;
const composition_api_1 = require("@vue/composition-api");
const Table_1 = require("../../../../../../abstract/components/Table");
const TableCell_1 = require("./TableCell");
const TableRow_1 = require("./TableRow");
exports.DashmixFakeRow = composition_api_1.defineComponent({
    name: 'DashmixFakeRow',
    components: { DashmixTableCell: TableCell_1.DashmixTableCell, DashmixTableRow: TableRow_1.DashmixTableRow },
    props: Table_1.tableFakeRowProps,
    setup(props) {
        return {
            getRow: () => {
                return { selectable: props.showSelection, selected: false };
            }
        };
    },
    template: `
    <div>
    <template v-for="n in rowsCount">
      <DashmixTableRow class="row--fake" :key="n" :index="n" :row="getRow()"
                       :gridColumns="gridColumns" :showSelection="showSelection">
        <template v-for="m in head.length">
          <DashmixTableCell :key="m" :class="isLoading && 'loading'" />
        </template>
      </DashmixTableRow>
    </template>
    </div>
  `
});
