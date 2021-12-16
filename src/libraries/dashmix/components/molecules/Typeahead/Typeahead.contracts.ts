// Copyright © 2021 Move Closer

import { ComputedRef, Ref } from '@vue/composition-api'
import Vue, { VueConstructor } from 'vue'

import { Size } from '../../../../../composables'
import { DropdownItem } from '../../../../../abstract/components/Dropdown'

import { DashmixTheme } from '../../../contracts'

import { DashmixBadgeVariant, DashmixSelectItem } from '../../atoms'


export interface Hint extends DashmixSelectItem {
  new?: boolean
  label: string
  notClickable?: boolean
}

export interface TypeaheadProps {
  autofocus: boolean
  badgeMaxLength: number
  badgeTheme: DashmixTheme
  badgeVariant: DashmixBadgeVariant
  clearable: boolean
  disabled: boolean
  error: boolean
  hints: Hint[]
  isMulti: boolean
  loading: boolean
  name: string
  newResult: string
  noResults: string
  placeholder: string
  selected: Hint[]
  showSelection: boolean
  size: Size
  taggable: boolean
  useDebounce: boolean
}

export interface UseTypeahead {
  dropdown: Ref<HTMLElement | null>
  dropdownItems: ComputedRef<DropdownItem[]>
  input: Ref<VueConstructor<Vue> | null>
  onClear: () => void
  onInputChange: (newValue: string) => void
  value: Ref<string>
}
