// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { BootstrapButton } from '../Button'

import { BootstrapTableCell } from '../Table/partials'
import { bootstrapTableProps, useBootstrapTable } from './Table.hooks'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  props: bootstrapTableProps,
  components: { BootstrapButton, BootstrapTableCell },

  setup () {
    const { composeSlotName } = useBootstrapTable()
    return { composeSlotName }
  },

  template: `
    <b-table v-bind="{ items }" :fields="head">
      <template v-for="field in head" v-slot:[composeSlotName(field)]="data">
        {{ data.value }}
        <BootstrapTableCell v-bind="{ index, value, item }"/>
      </template>
    </b-table>
  `
})
