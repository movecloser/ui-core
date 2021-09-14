import { computed, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '@/shared/dsl'

import { TableCellProps, UseBootstrapTableCellProvides } from './TableCell.contracts'
import { TableItem } from '@/shared/dsl/src/libraries/bootstrap/components/Table'
import { VueConstructor } from 'vue'

export const bootstrapTableCellProps: ComponentObjectPropsOptions<TableCellProps> = {
  index: {
    type: Number,
    required: true
  },
  item: {
    type: Object as PropType<TableItem>,
    required: true
  },
  value: {
    type: [String, Function] as PropType<string | VueConstructor>,
    required: true
  }
}

export const useBootstrapTableCell = (props: TableCellProps): UseBootstrapTableCellProvides => {
  const shouldRenderComponent:UseBootstrapTableCellProvides['shouldRenderComponent'] =
    computed<boolean>(() => typeof props.value === 'function')

  return { shouldRenderComponent }
}
