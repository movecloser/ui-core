// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { tableFakeRowProps, TableFakeRowProps } from '../../../../../../abstract/components/Table'

import { DashmixTableCell } from './TableCell'
import { DashmixTableRow } from './TableRow'

export const DashmixFakeRow = defineComponent({
  name: 'DashmixFakeRow',
  components: { DashmixTableCell, DashmixTableRow },
  props: tableFakeRowProps,

  setup (props: TableFakeRowProps) {
    return {
      getRow: () => {
        return { selectable: props.showSelection, selected: false }
      }
    }
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
})
