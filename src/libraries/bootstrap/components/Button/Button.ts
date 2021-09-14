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
    const { loadingClass, variant } = useBootstrapButton(props)
    return { loadingClass, variant }
  },

  template: `
    <b-button :class="loadingClass" v-bind="{ size, variant }"
              :disabled="disabled || loading" @click="$emit('click')">

      <!-- Button's content -->
      <slot />

      <!-- Loading indicator -->
      <div v-if="loading" class="btn__spinner">
        <div class="spinner-border" role="status">
          <span class="sr-only">{{ $t('_.please-wait') }}</span>
        </div>
      </div>

    </b-button>
  `
})
