// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '@/shared/dsl/src'
import { TableHead, TableProps } from './Table.contracts'
import { PropType } from '@vue/composition-api'

export const bootstrapTableProps: ComponentObjectPropsOptions<TableProps> = {
  head: {
    type: Array as PropType<TableHead>,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  }
}
