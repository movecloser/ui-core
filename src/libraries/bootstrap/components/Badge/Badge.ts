// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { bootstrapBadgeProps, useBootstrapBadge } from './Badge.hooks'
import { BootstrapBadgeProps } from './Badge.contracts'

/**
 * @author Sebastian Dziechciarz <sebastian.dziechciarz@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapBadge = defineComponent({
  name: 'BootstrapBadge',
  props: bootstrapBadgeProps,

  setup (props: BootstrapBadgeProps) {
    const { themeClass } = useBootstrapBadge(props)
    return { themeClass }
  },

  template: `
    <component :is="tag" class="badge" :class="themeClass">
      <slot />
    </component>
  `
})
