"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixButton = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_1 = require("../Icon");
const Button_hooks_1 = require("./Button.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixButton = composition_api_1.defineComponent({
    name: 'DashmixButton',
    components: { DashmixIcon: Icon_1.DashmixIcon },
    props: Button_hooks_1.dashmixButtonProps,
    emits: ['click'],
    setup(props, ctx) {
        return { ...Button_hooks_1.useDashmixButton(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <button type="button" class="btn" :class="[sizeClass, styleClass, { loading }]"
            :disabled="loading || disabled"
            @click="handleClick">
    <span :class="{ 'animated flash': isPendingClick }">
        <slot name="before" />

        <slot name="loader">
          <DashmixIcon v-if="loading" :icon="DashmixIconName.SpinnerSolid"
                       :class="{ 'mr-2': message }" />
        </slot>

        <slot>
          <DashmixIcon v-if="!loading && icon" v-bind="{ icon }"
                       :class="{ 'mr-0 mr-sm-2': message }" />
          <span v-if="message"
                :class="{ 'd-none d-sm-inline': icon && !alwaysWithLabel }">{{ message }}</span>
        </slot>

        <slot name="after" />
      </span>
    </button>
  `
});
