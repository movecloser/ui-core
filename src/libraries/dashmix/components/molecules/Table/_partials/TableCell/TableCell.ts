// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixTableCellProps } from './TableCell.contracts'
import { dashmixTableCellProps, useDashmixTableCell } from './TableCell.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export const DashmixTableCell = defineComponent({
  name: 'DashmixTableCell',
  props: dashmixTableCellProps,

  setup (props: DashmixTableCellProps) {
    const { gridColumnEnd } = useDashmixTableCell(props)
    return { gridColumnEnd }
  },

  template: `
    <div class="row__cell" :class="className" :style="{ gridColumnEnd }">
    <slot />
    </div>
  `
})
