// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { bootstrapTableCellProps, useBootstrapTableCell } from './TableCell.hooks'
import { TableCellProps } from './TableCell.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTableCell = defineComponent({
  name: 'BootstrapTableCell',
  props: bootstrapTableCellProps,

  setup (props: TableCellProps) {
    const { shouldRenderComponent } = useBootstrapTableCell(props)
    return { shouldRenderComponent }
  },

  template: `
    <component v-if="shouldRenderComponent" :is="value" v-bind="{ index, item, value }" />
    <span v-else>{{ value }}</span>
  `
})
