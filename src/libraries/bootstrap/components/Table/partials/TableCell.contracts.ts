// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { TableItem } from '@/shared/dsl/src/libraries/bootstrap/components/Table'
import { VueConstructor } from 'vue'

// TODO: documentation
export interface TableCellProps {
  /**
   * table element index
   */
  index: number
  /**
   * table item key
   */
  item: TableItem
  /**
   * value for the item key
   */
  value: string | VueConstructor
}

export interface UseBootstrapTableCellProvides {
  /**
   * method that checks if should render component or string in table cell
   */
  shouldRenderComponent: ComputedRef<boolean>
}
