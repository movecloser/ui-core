// Copyright © 2021 Move Closer

import { computed } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../../../contracts'

import { DashmixTableCellProps } from './TableCell.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export const dashmixTableCellProps: ComponentObjectPropsOptions<DashmixTableCellProps> = {
  className: {
    type: String,
    required: false,
    default: ''
  },

  span: {
    type: String,
    required: false,
    default: ''
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixTableCell = (props: DashmixTableCellProps) => {
  /**
   * Value for the `grid-column-end` CSS declaration.
   */
  const gridColumnEnd = computed<string>(() => `span ${props.span}`)

  return { gridColumnEnd }
}
