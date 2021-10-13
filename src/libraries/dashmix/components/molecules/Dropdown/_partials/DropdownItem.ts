// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import {
  DropdownItemProps,
  dropdownItemProps
} from '../../../../../../abstract/components/Dropdown'

import { DashmixIcon, DashmixIconName } from '../../../atoms/Icon'
import { useDashmixDropdownItem } from './DropdownItem.hooks'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixDropdownItem = defineComponent({
  name: 'DropdownItem',
  components: { DashmixIcon },
  props: dropdownItemProps,
  setup (props: DropdownItemProps, ctx: SetupContext) {
    return { ...useDashmixDropdownItem(props, ctx), DashmixIconName }
  },
  template: `
    <component :is="item.onClick ? 'button' : 'div'"
               class="dropdown-item" :class="[itemClass, { disabled: !isClickable }]"
               @click="onClick">
    <DashmixIcon v-if="item.icon" :icon="isLoading ? DashmixIconName.SpinnerSolid : item.icon"
                 :class="{ 'mr-2': item.label.length > 0 }" />
    {{ item.label }}
    </component>
  `
})
