// Copyright © 2021 Move Closer

import { BTable } from 'bootstrap-vue'
import { defineComponent } from '@vue/composition-api'

import { BootstrapTableCell } from './partials'
import { bootstrapTableProps, useBootstrapTable } from './Table.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  components: { BTable, BootstrapTableCell },
  props: bootstrapTableProps,

  setup () {
    const { composeSlotName } = useBootstrapTable()
    return { composeSlotName }
  },

  template: `
    <BTable v-bind="{ fields, items }">
      <template v-for="field in fields" v-slot:[composeSlotName(field)]="{ index, item, value }">
        <BootstrapTableCell v-bind="{ index, item, value }" />
      </template>
    </BTable>
  `
})
