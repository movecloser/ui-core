// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapModalProps } from './Modal.contracts'
import { bootstrapModalProps, useBootstrapModal } from './Modal.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapModal = defineComponent({
  name: 'BootstrapModal',
  props: bootstrapModalProps,
  emits: ['close'],

  setup (props: BootstrapModalProps, ctx: SetupContext) {
    const { close } = useBootstrapModal(props, ctx)
    return { close }
  },

  template: `
    <div class="modal fade d-block" :class="{ 'show': open }" tabindex="-1" role="dialog">
      <!-- Backdrop -->
      <div v-if="open" class="modal-backdrop fade show" @click="closable ? close() : null" />

      <!-- Actual modal -->
      <div class="modal-dialog">
        <slot v-bind:close="close" />
      </div>
    </div>
  `
})
