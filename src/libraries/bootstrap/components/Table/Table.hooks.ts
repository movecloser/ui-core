// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { TableHead, TableProps } from './Table.contracts'

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
