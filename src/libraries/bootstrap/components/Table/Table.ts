// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { bootstrapTableProps } from './Table.hooks'
import { TableProps } from './Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  props: bootstrapTableProps,

  setup (props: TableProps, ctx: SetupContext) {
    return {

    }
  },

  template: `
    <template>
        <b-table small :fields="fields" :items="items" responsive="sm">
          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(name)="data">
            <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
          </template>

          <!-- A virtual composite column -->
          <template #cell(nameage)="data">
            {{ data.item.name.first }} is {{ data.item.age }} years old
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell()="data">
            <i>{{ data.value }}</i>
          </template>
        </b-table>
    </template>

  `
})
