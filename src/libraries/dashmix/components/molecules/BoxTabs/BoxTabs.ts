// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixBoxTabsProps } from './BoxTabs.contracts'
import { dashmixBoxTabsProps, useDashmixBoxTabs } from './BoxTabs.hooks'

import { DashmixBox } from '../../atoms/Box'
import { DashmixNavTabs } from '../NavTabs'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixBoxTabs = defineComponent({
  name: 'DashmixBoxTabs',
  components: { DashmixBox, DashmixNavTabs },
  props: dashmixBoxTabsProps,
  emits: ['update:active'],

  setup (props: DashmixBoxTabsProps, ctx: SetupContext) {
    return useDashmixBoxTabs(props, ctx)
  },

  template: `
    <div class="block">
    <div class="d-flex bg-light">
      <DashmixNavTabs class="flex-fill" :scrollable="scrollable" :active.sync="activeItem"
                      :items="tabs" :disabled="disabled" :justify="justifyTabs" />

      <div class="d-flex align-items-center px-3">
        <slot name="right"></slot>
      </div>
    </div>

    <div class="block-content"
         :class="{ 'block-content-full': !this.$slots.footer || isFooterDivided, 'p-0': noBodyPadding }">
      <template v-for="(item, i) in items">
        <slot v-bind="{ item: item, tabId }">
          <component v-show="item.tab.id === activeItem" :key="tabId  + '-' + i"
                     :is="item.component || 'p'" v-bind="item.props">
            {{ !item.component ? 'Component to render not provided!' : null }}
          </component>
        </slot>
      </template>
    </div>

    <div v-if="this.$slots.footer" class="block-content block-content-full block-content-sm"
         :class="[{'bg-body-light': isFooterDivided}, footerClass]">
      <slot name="footer"></slot>
    </div>
    </div>
  `
})
