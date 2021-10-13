"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapInput = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../composables");
const abstract_1 = require("../../../../abstract");
const FormError_1 = require("../FormError");
const Icon_1 = require("../Icon");
const Input_hooks_1 = require("./Input.hooks");
const Input_config_1 = require("./Input.config");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapInput = composition_api_1.defineComponent({
    name: 'BootstrapInput',
    components: { BootstrapFormError: FormError_1.BootstrapFormError, BootstrapIcon: Icon_1.BootstrapIcon },
    props: Input_hooks_1.bootstrapInputProps,
    setup(props, ctx) {
        const { size } = composition_api_1.toRefs(props);
        const { sizeClass, validationClass, value: _model } = abstract_1.useInputControl(props, ctx, Input_config_1.bootstrapInputSizeRegistry);
        /**
         * Determines the size of the prepended icon
         */
        const iconSize = composition_api_1.computed(() => size.value === composables_1.SizeMap.Medium ? composables_1.SizeMap.Small : composables_1.SizeMap.Medium);
        return { iconSize, _model, sizeClass, validationClass };
    },
    template: `
    <div class="form-input" :class="[sizeClass, icon ? '--with-icon' : '']">

    <!-- Main <input> element -->
    <input v-model="_model" v-bind="{ disabled, name, readonly, required, type }" :id="$id()"
           class="form-input__control" :class="validationClass"
           :placeholder="placeholder || ' '">

    <!-- Icon -->
    <BootstrapIcon v-if="icon" :name="icon" :size="iconSize" class="form-input__icon" />

    <!-- Label -->
    <label :for="$id()" class="form-input__label">
      {{ label }}
    </label>

    <!-- Validation errors -->
    <BootstrapFormError v-for="error in errors" :key="error">
      {{ error }}
    </BootstrapFormError>

    </div>
  `
});
