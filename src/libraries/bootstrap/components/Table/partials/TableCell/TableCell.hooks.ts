// Copyright © 2021 Move Closer

import Vue from 'vue'
import { computed, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../../contracts'

import { TableCellProps, UseBootstrapTableCellProvides } from './TableCell.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const bootstrapTableCellProps: ComponentObjectPropsOptions<TableCellProps> = {
  index: {
    type: Number,
    required: true
  },

  item: {
    type: Object as PropType<TableCellProps['item']>,
    required: true
  },

  value: { required: true }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const useBootstrapTableCell = (props: TableCellProps): UseBootstrapTableCellProvides => {
  /**
   * @see UseBootstrapTableCellProvides.shouldRenderComponent
   */
  const shouldRenderComponent: UseBootstrapTableCellProvides['shouldRenderComponent'] = computed<boolean>(
    () => {
      const isVueComponent: boolean = (
        typeof props.value === 'function' ||
        props.value instanceof Vue
      )

      const isVueComponentOptions: boolean = (
        typeof props.value === 'object' &&
        props.value !== null &&
        Object.prototype.hasOwnProperty.call(props.value, 'template')
      )

      return isVueComponent || isVueComponentOptions
    })

  return { shouldRenderComponent }
}
