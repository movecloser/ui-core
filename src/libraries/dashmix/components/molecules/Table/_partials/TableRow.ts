// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { TableRowProps, tableRowProps } from '../../../../../../abstract/components/Table'

import { DashmixButton } from '../../../atoms/Button'
import { DashmixCheck } from '../../../atoms/Check'
import { DashmixDropdown, DashmixDropdownItem } from '../../Dropdown'
import { DashmixIconName } from '../../../atoms/Icon'

import { DashmixTheme } from '../../../../contracts'

import { DashmixTableCell } from './TableCell'
import { useDashmixTableRow } from './TableRow.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixTableRow = defineComponent({
  name: 'DashmixTableRow',
  components: {
    DashmixButton,
    DashmixCheck,
    DashmixDropdown,
    DashmixDropdownItem,
    DashmixTableCell
  },
  props: tableRowProps,

  setup (props: TableRowProps, ctx: SetupContext) {
    return { ...useDashmixTableRow(props, ctx), DashmixIconName }
  },

  template: `
    <div class="row no-gutters pl-2 pl-md-3"
         :class="{ 'selected': isSelected, 'disabled': !row.selectable }"
         :style="{ gridTemplateColumns: gridColumns }">

    <DashmixTableCell v-if="showSelection" className="d-none d-md-flex row__cell center">
      <DashmixCheck :id="'row-'+index" name="bulkItem" :model.sync="selected" :value="row.id"
                    theme="${DashmixTheme.Light}" :disabled="!row.selectable" />
    </DashmixTableCell>

    <slot>
      <DashmixTableCell v-for="(c, i) in row.data" :key="'cell'+i">{{ c }}</DashmixTableCell>
    </slot>

    <DashmixTableCell v-if="showActions && dropdownActions.length" className="action-cell center">
      <DashmixDropdown class="row__dropdown-button" align="right"
                       :icon="DashmixIconName.EllipsisVSolid"
                       triggerTheme="light" triggerSize="small">
        <slot name="actions" :actions="dropdownActions" :data="row.data">
          <DashmixDropdownItem v-for="(item, i) in dropdownActions" :key="'dropdown-' + i"
                               :item="item" />
        </slot>
      </DashmixDropdown>
    </DashmixTableCell>
    </div>
  `
})
