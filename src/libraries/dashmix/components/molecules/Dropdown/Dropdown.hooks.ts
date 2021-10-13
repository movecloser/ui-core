// Copyright © 2021 Move Closer

import { PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import {
  DropdownAlignmentMap,
  DropdownPosition,
  dropdownProps,
  useDropdown
} from '../../../../../abstract/components/Dropdown'
import { getSizePropDefinition, useThemeClass } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixButtonVariant, DashmixButtonVariantMap } from '../../atoms/Button'

import {
  dashmixDropdownAlignClassRegistry,
  dashmixDropdownPositionClassRegistry
} from './Dropdown.config'
import { DashmixDropdownProps, UseDashmixDropDownProvides } from './Dropdown.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixDropdownProps: ComponentObjectPropsOptions<DashmixDropdownProps> = {
  ...dropdownProps,

  triggerSize: getSizePropDefinition(),

  triggerTheme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: () => DashmixTheme.Primary
  },

  triggerVariant: {
    type: String as PropType<DashmixButtonVariant>,
    required: false,
    default: () => DashmixButtonVariantMap.Default
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixDropdown = (
  props: DashmixDropdownProps,
  ctx: SetupContext
): UseDashmixDropDownProvides => {
  const { align, position } = toRefs(props)

  const { close, isOpen, open, toggle } = useDropdown(props, ctx)

  const dropdownClass = useThemeClass<DropdownPosition>(
    position,
    dashmixDropdownPositionClassRegistry
  )
  const dropdownMenuClass = useThemeClass<DropdownAlignmentMap>(
    align,
    dashmixDropdownAlignClassRegistry
  )

  return {
    close,
    dropdownClass: dropdownClass.themeClass,
    dropdownMenuClass: dropdownMenuClass.themeClass,
    isOpen,
    open,
    toggle
  }
}
