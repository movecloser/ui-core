// Copyright © 2021 Move Closer

import { BvTableField } from 'bootstrap-vue/src/components/table'
import { Data } from '@vue/composition-api'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export type TableField = { key: string } & BvTableField

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export type TableItem = { [key: string]: unknown }

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableProps extends Data {
  /**
   * Table fields (header configuration).
   */
  fields: TableField[];

  /**
   * Data to be rendered inside the table.
   */
  items: TableItem[];
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface UseBootstrapTableProvides {
  /**
   * Composes the name (identifier) of the template slot for the passed-in field.
   *
   * @param field - Currently-processed table field
   *   that the template slot is going to be generated for.
   */
  composeSlotName: (field: TableField) => string;
}
