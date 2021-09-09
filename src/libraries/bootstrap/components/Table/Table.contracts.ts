// Copyright © 2021 Move Closer

import { AnyObject } from '@movecloser/front-core'
import { BvTableField } from 'bootstrap-vue/src/components/table'
import { Data } from '@vue/composition-api'
import { VueConstructor } from 'vue'

export interface TableCell {
  component?: VueConstructor;
  key: string;
  value: string | AnyObject
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

export type TableItem = TableCell[]

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableProps extends Data {
  head: TableHead;
  isLoading: boolean;
  items: TableItem[];
}
