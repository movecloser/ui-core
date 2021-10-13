"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixModalInner = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_1 = require("../../../atoms/Icon");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixModalInner = composition_api_1.defineComponent({
    name: 'ModalInner',
    components: { DashmixIcon: Icon_1.DashmixIcon },
    props: {
        noControl: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['close'],
    setup() {
        return { Icons: Icon_1.DashmixIconName };
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
});
