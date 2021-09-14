// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { BootstrapButton } from '../Button'
import { bootstrapTableProps } from './Table.hooks'
import { TableCell, TableHeadElement } from './Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  props: bootstrapTableProps,
  components: { BootstrapButton },

  methods: {
    composeSlotName (filed: TableHeadElement): string {
      return `cell(${filed.key})`
    },
    findCell (row: any): TableCell {
      const found: TableCell | undefined = row.item.find((r: TableCell) => r.key === row.field.key)

      if (!found) {
        return {
          key: row.field.key,
          value: ''
        }
      }

      return found
    },
    shouldRenderComponent (row: any): boolean {
      const found = this.findCell(row)
      // TODO: Throw when value is an object and there's no component defined.
      return typeof row.item.component !== 'undefined'
    }
  },

  template: `
    <b-table small :fields="head" :items="items" responsive="sm">
      <template v-for="field in head" v-slot:[composeSlotName(field)]="data">
        <span v-if="!shouldRenderComponent(data)">{{ findCell(data).value }}</span>
        <component v-else :is="findCell(data).component" :item="findCell(data).value" />
      </template>
    </b-table>
  `
})
