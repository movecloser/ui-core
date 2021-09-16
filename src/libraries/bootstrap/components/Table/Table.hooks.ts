// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'

import { TableField, TableItem, TableProps, UseBootstrapTableProvides } from './Table.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const bootstrapTableProps: ComponentObjectPropsOptions<TableProps> = {
  fields: {
    type: Array as PropType<TableField[]>,
    required: true
  },

  items: {
    type: Array as PropType<TableItem[]>,
    required: true
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const useBootstrapTable = (): UseBootstrapTableProvides => {
  /**
   * @see UseBootstrapTableProvides.composeSlotName
   */
  const composeSlotName: UseBootstrapTableProvides['composeSlotName'] =
    (field: TableField): string => `cell(${field.key})`

  return { composeSlotName }
}
