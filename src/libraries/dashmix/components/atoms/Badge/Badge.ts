// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixBadgeProps } from './Badge.contracts'
import { dashmixBadgeProps, useDashmixBadge } from './Badge.hooks'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixBadge = defineComponent({
  name: 'DashmixBadge',
  props: dashmixBadgeProps,

  setup (props: DashmixBadgeProps) {
    return useDashmixBadge(props)
  },

  template: `
    <span class="badge" :class="[shapeClass, styleClass]">
      <slot>{{ label }}</slot>
    </span>
  `
})
