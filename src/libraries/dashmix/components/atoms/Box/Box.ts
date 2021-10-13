// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { dashmixBoxProps, useDashmixBox } from './Box.hooks'
import { DashmixBoxProps } from './Box.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixBox = defineComponent({
  name: 'DashmixBox',
  props: dashmixBoxProps,
  setup (props: DashmixBoxProps, ctx: SetupContext) {
    return useDashmixBox(props, ctx)
  },

  template: `
    <div class="block" :class="{'block-fx-shadow': shadow}">
    <div v-if="$slots.header" class="block-header"
         :class="[{'block-header-default': isHeaderDivided, 'border-bottom': !isHeaderDivided}, headerClass]">
      <slot name="header" />
    </div>

    <div class="block-content"
         :class="[bodyClass, bodyPaddingClass]">
      <slot />
    </div>

    <div v-if="$slots.footer" class="block-content block-content-full block-content-sm font-size-sm"
         :class="[{'bg-body-light': isFooterDivided}, footerClass]">
      <slot name="footer" />
    </div>
    </div>
  `
})
