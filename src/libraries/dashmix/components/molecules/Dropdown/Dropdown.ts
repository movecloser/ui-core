// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'
import { v4 as uuid } from 'uuid'

import { DashmixButton } from '../../atoms/Button'
import { DashmixIcon } from '../../atoms/Icon'

import { DashmixDropdownDivider, DashmixDropdownItem } from './_partials'
import { DashmixDropdownProps } from './Dropdown.contracts'
import { dashmixDropdownProps, useDashmixDropdown } from './Dropdown.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixDropdown = defineComponent({
  name: 'Dropdown',
  components: { DashmixButton, DashmixDropdownDivider, DashmixDropdownItem, DashmixIcon },
  props: dashmixDropdownProps,

  setup (props: DashmixDropdownProps, ctx: SetupContext) {
    return { ...useDashmixDropdown(props, ctx), id: uuid() }
  },

  template: `
    <div class="dropdown" :class="[dropdownClass, { open: isOpen }]">
    <slot name="trigger"
          v-bind="{ close, isOpen, open, toggle, triggerSize, triggerTheme, triggerVariant }">
      <DashmixButton :id="id" :size="triggerSize" :theme="triggerTheme" :variant="triggerVariant"
                     :icon="icon" :label="label"
                     data-toggle="dropdown" aria-haspopup="true"
                     :aria-expanded="isOpen ? 'true' : 'false'"
                     v-closable="{ handler: 'close', exclude: [] }" @click="toggle" />
    </slot>

    <div class="dropdown-menu" :class="[dropdownMenuClass, { 'd-block': isOpen }]"
         :aria-labelledby="id">
      <template v-for="(item, i) in items">
        <DashmixDropdownDivider v-if="item.type === 'divider'" :key="'item'+ i" />
        <DashmixDropdownItem v-else :key="'item'+ i" :item="item" @click="close">Hello
        </DashmixDropdownItem>
      </template>
      <slot v-bind="{ close, isOpen }" />
    </div>
    </div>
  `
})
