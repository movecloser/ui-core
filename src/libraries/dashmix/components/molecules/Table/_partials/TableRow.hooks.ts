// Copyright © 2021 Move Closer

import { computed, SetupContext } from '@vue/composition-api'

import { DropdownItem } from '../../../../../../abstract/components/Dropdown'
import { TableRowProps, useTableRow } from '../../../../../../abstract/components/Table'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDashmixTableRow (props: TableRowProps, ctx: SetupContext) {
  const { filteredActions, isSelected, selected } = useTableRow(props, ctx)
  const dropdownActions = computed<DropdownItem[]>(() => filteredActions.value.map(action => {
    return {
      type: 'item',
      icon: action.icon,
      label: action.label,
      onClick: () => {
        ctx.emit('do', { id: props.row.id, action: action.action, data: props.row.data })
      },
      theme: action.theme
    }
  }))

  return { dropdownActions, isSelected, selected }
}
