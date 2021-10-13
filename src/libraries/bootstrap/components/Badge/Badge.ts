// Copyright © 2021 Move Closer

import { BBadge } from 'bootstrap-vue'
import { defineComponent } from '@vue/composition-api'

import { bootstrapBadgeProps } from './Badge.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapBadge = defineComponent({
  name: 'BootstrapBadge',
  components: { BBadge },
  props: bootstrapBadgeProps,

  template: `
    <BBadge :variant="theme">
    <slot />
    </BBadge>
  `
})
