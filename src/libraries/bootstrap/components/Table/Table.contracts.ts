// Copyright © 2021 Move Closer

import { BvTableField } from 'bootstrap-vue/src/components/table'
import { Data } from '@vue/composition-api'
import Vue, { ComponentOptions, VueConstructor } from 'vue'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableItem {
  /**
   * Single table item that is a key and it's result can be string or component
   */
  [key: string]: string | VueConstructor | ComponentOptions<Vue>
}

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export type TableHead = TableHeadElement[]

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableHeadElement extends BvTableField {
  /**
   * table head key
   */
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
  /**
   * Method which is composing name for table columns slots
   * @param field
   */
  composeSlotName: (field: TableHeadElement) => string;
}
