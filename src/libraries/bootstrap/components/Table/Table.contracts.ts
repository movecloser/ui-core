// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableProps extends Data {
  head: TableHead;
  isLoading: boolean;
}

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export type TableHead = TableHeadElement[]

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableHeadElement {
  column: string;
  label: string;
  width?: string;
}
