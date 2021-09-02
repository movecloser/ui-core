// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapButton } from '../../Button'
import { BootstrapIcon } from '../../Icon'

import { BootstrapModalProps } from '../Modal.contracts'
import { bootstrapModalProps, useBootstrapModal } from '../Modal.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapModalInner = defineComponent({
  name: 'BootstrapModalInner',
  props: bootstrapModalProps,
  components: { BootstrapButton, BootstrapIcon },
  emits: ['close'],

  setup (props: BootstrapModalProps, ctx: SetupContext) {
    const { close } = useBootstrapModal(props, ctx)
    return { close }
  },

  template: `
    <div class="modal-content">
      <!-- Header -->
      <div v-if="$scopedSlots.title" class="modal-header">
        <h3 class="modal-title">
          <slot name="title" v-bind:close="close" />
        </h3>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <slot name="body" v-bind:close="close" />
      </div>

      <!-- Footer -->
      <div v-if="$scopedSlots.footer" class="modal-footer">
        <slot name="footer" v-bind:close="close" />
      </div>

      <!-- "Close" button -->
      <BootstrapButton v-if="closable" class="btn-link modal-close-btn" size="small" @click="close">
        <BootstrapIcon name="close" />
      </BootstrapButton>
    </div>
  `
})
