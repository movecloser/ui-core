// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'

import { TableHead, TableHeadElement, TableItem, TableProps, UseBootstrapTableProvides } from './Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const bootstrapTableProps: ComponentObjectPropsOptions<TableProps> = {
  head: {
    type: Array as PropType<TableHead>,
    required: true
  },
  items: {
    type: Array as PropType<TableItem[]>,
    required: true
  }
}

export const useBootstrapTable = (): UseBootstrapTableProvides => {
  const composeSlotName: UseBootstrapTableProvides['composeSlotName'] =
    (field: TableHeadElement): string => `cell(${field.key})`

  return { composeSlotName }
}
