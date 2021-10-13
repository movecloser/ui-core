// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixIcon, DashmixIconName } from '../../../atoms/Icon'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const DashmixModalInner = defineComponent({
  name: 'ModalInner',
  components: { DashmixIcon },
  props: {
    noControl: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['close'],

  setup () {
    return { Icons: DashmixIconName }
  },

  template: `
    <div class="modal-content">
    <div class="modal-header align-items-center" v-if="!noControl">
      <slot name="header" />

      <button class="close" @click="$emit('close')">
        <DashmixIcon :icon="Icons.TimesSolid" size="x-small" />
      </button>
    </div>

    <div class="modal-body">
      <slot />
    </div>

    <div class="modal-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
    </div>
  `
})
