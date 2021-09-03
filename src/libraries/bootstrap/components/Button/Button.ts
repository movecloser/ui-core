// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import './Button.scss'
import { BootstrapButtonProps } from './Button.contract'
import { bootstrapButtonProps, useBootstrapButton } from './Button.hooks'

/**
 * @emits click - When the button gets clicked.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapButton = defineComponent({
  name: 'BootstrapButton',
  props: bootstrapButtonProps,
  emits: ['click'],

  setup (props: BootstrapButtonProps) {
    const { loadingClass } = useBootstrapButton(props)
    return { loadingClass }
  },

  template: `
    <b-button :class="loadingClass" v-bind="{ size }" :disabled="disabled || loading" :variant="theme">
      <slot />
      <b-icon v-if="loading" class="btn__icon" icon="hourglass-bottom" animation="fade" />
    </b-button>
  `
})
