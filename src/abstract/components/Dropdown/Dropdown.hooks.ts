// Copyright © 2021 Move Closer

import { computed, PropType, ref, Ref, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import {
  DropdownAlignment,
  DropdownAlignmentMap, DropdownItem,
  DropdownPosition,
  DropdownPositionMap,
  DropdownProps,
  UseDropdownProvides
} from './Dropdown.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dropdownProps: ComponentObjectPropsOptions<DropdownProps> = {
  align: {
    type: String as PropType<DropdownAlignment>,
    required: false,
    default: () => DropdownAlignmentMap.Left
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  items: {
    type: Array as PropType<DropdownItem[]>,
    required: false,
    default: () => []
  },
  label: {
    type: String,
    required: false,
    default: ''
  },
  openOnMount: {
    type: Boolean,
    required: false,
    default: false
  },
  position: {
    type: String as PropType<DropdownPosition>,
    required: false,
    default: () => DropdownPositionMap.Down
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDropdown (props: DropdownProps, ctx: SetupContext): UseDropdownProvides {
  const isOpen: Ref<boolean> = ref(props.openOnMount || false)

  const hasCustomTrigger = computed<boolean>(() => props.trigger !== null)

  const close = () => { isOpen.value = false }
  const open = () => { isOpen.value = true }
  const toggle = () => { isOpen.value ? close() : open() }

  return { close, hasCustomTrigger, isOpen, open, toggle }
}
