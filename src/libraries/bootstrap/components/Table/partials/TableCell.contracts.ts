// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { TableItem } from '../Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableCellProps {
  /**
   * Table element index
   */
  index: number

  /**
   * Table item key
   */
  item: TableItem

  /**
   * Value for the table item key
   */
  value: string | VueConstructor
}

export interface UseBootstrapTableCellProvides {
  /**
   * method that checks if should render component or string in table cell
   */
  shouldRenderComponent: ComputedRef<boolean>
}
