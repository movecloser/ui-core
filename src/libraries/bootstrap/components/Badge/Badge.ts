// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { bootstrapBadgeProps } from './Badge.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapBadge = defineComponent({
  name: 'BootstrapBadge',
  props: bootstrapBadgeProps,

  template: `
    <b-badge :variant="theme">
      <slot />
    </b-badge>
  `
})
