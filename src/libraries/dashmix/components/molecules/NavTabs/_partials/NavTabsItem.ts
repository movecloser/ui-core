// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixNavTabsItemProps } from './NavTabsItem.contracts'
import { dashmixNavTabsItemProps, useDashmixNavTabsItem } from './NavTabsItem.hooks'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixNavTabsItem = defineComponent({
  name: 'DashmixNavTabsItem',
  props: dashmixNavTabsItemProps,
  emits: ['click'],

  setup (props: DashmixNavTabsItemProps, ctx: SetupContext) {
    return useDashmixNavTabsItem(props, ctx)
  },

  template: `
    <li class="nav-item" v-on=" !isSimpleTab ? {click: onClick} : null">
    <a v-if="isSimpleTab" class="nav-link" :class="{ active, disabled }" href="#"
       @click.prevent="onClick">
      {{ label }}
    </a>
    <component v-else class="nav-link" :is="label" v-bind="props" :isActive="active" />
    </li>
  `
})
