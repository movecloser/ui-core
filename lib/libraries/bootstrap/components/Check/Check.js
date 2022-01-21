"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapCheck = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const FormError_1 = require("../FormError");
const Check_hooks_1 = require("./Check.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapCheck = composition_api_1.defineComponent({
    name: 'BootstrapCheck',
    components: { BFormGroup: bootstrap_vue_1.BFormGroup, BootstrapFormError: FormError_1.BootstrapFormError },
    props: Check_hooks_1.bootstrapCheckProps,
    emits: ['update:model'],
    setup(props, ctx) {
        const { checked, checkType, component, validationClass } = Check_hooks_1.useBootstrapCheck(props, ctx);
        return { checked, checkType, component, validationClass };
    },
    template: `
    <BFormGroup v-bind="{ disabled, label }" v-slot="{ ariaDescribedby }">
      <!-- Form component -->
      <component :is="component" v-model="checked" v-bind="{ disabled, name, options, readonly, required, stacked }"
                 class="form-check" :class="validationClass"
                 text-field="label" :id="name" :aria-describedby="ariaDescribedby" />
  
      <!-- Validation errors -->
      <BootstrapFormError v-for="error in errors" :key="error">
        {{ error }}
      </BootstrapFormError>
    </BFormGroup>
  `
});
