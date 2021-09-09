// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'
import { TableCell } from '@/shared/dsl/src/libraries/bootstrap/components/Table'

export const BootstrapTableCell = defineComponent({
  name: 'BootstrapTableCell',

  methods: {
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
  <div>
    <span v-if="!shouldRenderComponent(data)">{{ findCell(data).value }}</span>
    <component v-else :is="findCell(data).component" :item="findCell(data).value" />
  </div>
  `
})
