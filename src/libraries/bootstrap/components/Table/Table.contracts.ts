// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

export interface TableProps extends Data {
  head: TableHead;
  isLoading: boolean;
}

export type TableHead = TableHeadElement[]

export interface TableHeadElement {
  column: string;
  label: string;
  width?: string;
}
