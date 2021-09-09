// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { TableCell, TableHead, TableProps } from './Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const bootstrapTableProps: ComponentObjectPropsOptions<TableProps> = {
  head: {
    type: Array as PropType<TableHead>,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  },
  items: {
    type: Array as PropType<TableCell[]>,
    required: true,
    default: () => []
  }
}
