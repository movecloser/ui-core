// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'
import { useBootstrapTableCell } from './TableCell.hooks'
import { TableCellProps } from '@/shared/dsl/src/libraries/bootstrap/components/Table/partials/TableCell.contracts'

export const BootstrapTableCell = defineComponent({
  name: 'BootstrapTableCell',

  setup (props: TableCellProps) {
    const { shouldRenderComponent } = useBootstrapTableCell(props)
    return { shouldRenderComponent }
  },

  template: `
    <component v-if="shouldRenderComponent()" :is="data.component" :item="data.value" />
    <span v-else>{{ data.value }}</span>
  `
})
