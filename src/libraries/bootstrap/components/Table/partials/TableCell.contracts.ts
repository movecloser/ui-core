// Copyright © 2021 Move Closer

import { AnyObject } from '@movecloser/front-core'
import { VueConstructor } from 'vue'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableCell {
  component?: VueConstructor;
  key: string;
  value: string | AnyObject
}

export interface UseBootstrapTableCellProvides {
  findCell: (row: any) => void
  shouldRenderComponent: (row: any) => void
}
