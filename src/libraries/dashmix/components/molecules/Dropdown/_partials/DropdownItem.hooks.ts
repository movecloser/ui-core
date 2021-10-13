// Copyright © 2021 Move Closer

import { ref, SetupContext } from '@vue/composition-api'

import { DropdownItemProps, useDropdownItem } from '../../../../../../abstract/components/Dropdown'
import { useThemeClass } from '../../../../../../composables'

import { DashmixTheme } from '../../../../contracts'

import { dashmixDropdownItemClassRegistry } from '../Dropdown.config'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDashmixDropdownItem (props: DropdownItemProps, ctx: SetupContext) {
  const theme = ref<DashmixTheme>(props.item.theme as DashmixTheme || DashmixTheme.Default)
  const itemClass = useThemeClass(theme, dashmixDropdownItemClassRegistry)

  return { ...useDropdownItem(props, ctx), itemClass }
}
