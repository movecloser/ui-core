// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { BootstrapTableCell } from '../Table/partials'
import { bootstrapTableProps, useBootstrapTable } from './Table.hooks'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  props: bootstrapTableProps,
  components: { BootstrapTableCell },

  setup () {
    const { composeSlotName } = useBootstrapTable()
    return { composeSlotName }
  },

  template: `
    <b-table v-bind="{ items }" :fields="head">
      <template v-for="field in head" v-slot:[composeSlotName(field)]="{ index, item, value }">
        <BootstrapTableCell v-bind="{ index, item, value }" />
      </template>
    </b-table>
  `
})
