// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { bootstrapTableCellProps, useBootstrapTableCell } from './TableCell.hooks'
import { TableCellProps } from './TableCell.contracts'

export const BootstrapTableCell = defineComponent({
  name: 'BootstrapTableCell',
  props: bootstrapTableCellProps,

  setup (props: TableCellProps) {
    const { shouldRenderComponent } = useBootstrapTableCell(props)
    return { shouldRenderComponent }
  },

  template: `
    <component v-if="shouldRenderComponent" :is="value" v-bind="{ item }" />
    <span v-else>{{ value }}</span>
  `
})
