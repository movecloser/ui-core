// Copyright © 2021 Move Closer

import { createPopper, Instance, VirtualElement } from '@popperjs/core'
import { onMounted, onUnmounted, PropType, Ref, ref, SetupContext, toRefs } from '@vue/composition-api'

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
  dashmixDropdownAlignClassRegistry, dashmixDropdownPopperPositionRegistry,
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

  const dropdown: Ref<null | HTMLElement> = ref(null)
  const trigger: Ref<null | Vue> = ref(null)
  let popper: Instance | null = null

  const dropdownClass = useThemeClass<DropdownPosition>(
    position,
    dashmixDropdownPositionClassRegistry
  )
  const dropdownMenuClass = useThemeClass<DropdownAlignmentMap>(
    align,
    dashmixDropdownAlignClassRegistry
  )

  onMounted(() => {
    if (!dropdown.value || !trigger.value) {
      return
    }

    popper = createPopper(trigger.value.$el, dropdown.value, {
      placement: dashmixDropdownPopperPositionRegistry[position.value],
      modifiers: [
        {
          name: 'hide'
        },
        {
          name: 'offset',
          options: {
            offset: [0, 5]
          }
        }
      ]
    })
  })

  onUnmounted(() => {
    if (popper) {
      popper.destroy()
    }
  })

  return {
    close,
    dropdownClass: dropdownClass.themeClass,
    dropdown,
    dropdownMenuClass: dropdownMenuClass.themeClass,
    isOpen,
    open,
    toggle,
    trigger
  }
}
