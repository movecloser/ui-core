"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixInput = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../../abstract");
const Input_hooks_1 = require("./Input.hooks");
const Input_maps_1 = require("./Input.maps");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixInput = composition_api_1.defineComponent({
    name: 'DashmixInput',
    props: Input_hooks_1.dashmixInputProps,
    emits: ['blur', 'focus', 'input', 'update:model'],
    setup: (props, ctx) => {
        return abstract_1.useInputControl(props, ctx, Input_maps_1.dashmixSizeClasses, Input_maps_1.dashmixValidClasses);
    },
    template: `
    <input v-model="value" v-focus="autofocus"
           v-bind="{ autocomplete, disabled, placeholder, readonly, required, type }"
           class="form-control custom" :class="[sizeClass, validationClass]"
           @focus="() => $emit('focus')" @blur="() => $emit('blur')"
           @input="(e) => $emit('input', e)" />
  `
});
