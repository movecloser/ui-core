"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixCheck = void 0;
const composition_api_1 = require("@vue/composition-api");
const Check_hooks_1 = require("./Check.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixCheck = composition_api_1.defineComponent({
    name: 'DashmixCheck',
    props: Check_hooks_1.dashmixCheckProps,
    emits: ['update:model'],
    setup(props, ctx) {
        return Check_hooks_1.useDashmixCheck(props, ctx);
    },
    template: `
    <div class="custom-control" :class="['custom-' + type, sizeClass, themeClass]">
    <input class="custom-control-input" :class="[validationClass]"
           :name="name" :id="id || name" v-model="checked" :value="value"
           v-bind="{ disabled, readonly, type }" />
    <label class="custom-control-label font-w400" :for="id || name">
      <slot>{{ label }}</slot>
    </label>
    </div>
  `
});
