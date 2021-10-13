// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixNavTabsProps } from './NavTabs.contracts'
import { dashmixNavTabsProps, useDashmixNavTabs } from './NavTabs.hooks'
import { DashmixNavTabsItem } from './_partials'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixNavTabs = defineComponent({
  name: 'DashmixNavTabs',
  components: { DashmixNavTabsItem },
  props: dashmixNavTabsProps,
  emits: ['update:activeItem'],

  setup (props: DashmixNavTabsProps, ctx: SetupContext) {
    return useDashmixNavTabs(props, ctx)
  },

  template: `
    <div :class="{ 'nav-tabs-scrollable' : scrollable }">
    <ul class="nav nav-tabs nav-tabs-block"
        :class="{ disabled, 'nav-justified': justify, 'bg-light' : hasDefaultBackground }"
        role="tablist">
      <DashmixNavTabsItem v-for="(item, index) in items" :key="'tab-' + item.id +'-'+ index"
                          :index="index"
                          v-bind="item" :disabled="disabled ? disabled : item.disabled"
                          :active="isTabActive(item.id)" @click="activateTab(item.id)" />
    </ul>
    </div>
  `
})
