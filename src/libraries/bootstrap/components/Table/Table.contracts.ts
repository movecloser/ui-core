// Copyright © 2021 Move Closer

import { BvTableField } from 'bootstrap-vue/src/components/table'
import { Data } from '@vue/composition-api'
import { VueConstructor } from 'vue'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableItem {
  [key: string]: string | VueConstructor | any
}

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export type TableHead = TableHeadElement[]

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableHeadElement extends BvTableField {
  key: string;
}

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableProps extends Data {
  head: TableHead;
  items: TableItem[];
}

export interface UseBootstrapTableProvides {
  composeSlotName: (field: TableHeadElement) => string;
}
