"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapButton = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const Button_hooks_1 = require("./Button.hooks");
/**
 * @emits click - When the button gets clicked.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapButton = composition_api_1.defineComponent({
    name: 'BootstrapButton',
    components: { BButton: bootstrap_vue_1.BButton },
    props: Button_hooks_1.bootstrapButtonProps,
    emits: ['click'],
    setup(props) {
        const { loadingClass, variant } = Button_hooks_1.useBootstrapButton(props);
        return { loadingClass, variant };
    },
    template: `
    <BButton :class="loadingClass" v-bind="{ size, tag, variant }"
             :disabled="disabled || loading" @click="$emit('click')">
      <!-- Button's content -->
      <slot />

      <!-- Loading indicator -->
      <div v-if="loading" class="btn__spinner">
        <div class="spinner-border" role="status">
          <span class="sr-only">{{ $t('_.please-wait') }}</span>
        </div>
      </div>
    </BButton>
  `
});
