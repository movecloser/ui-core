"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapSelect = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../abstract");
const FormError_1 = require("../FormError");
const Select_hooks_1 = require("./Select.hooks");
const Select_config_1 = require("./Select.config");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapSelect = composition_api_1.defineComponent({
    name: 'BootstrapSelect',
    components: { BootstrapFormError: FormError_1.BootstrapFormError, BFormSelect: bootstrap_vue_1.BFormSelect, BFormSelectOption: bootstrap_vue_1.BFormSelectOption },
    props: Select_hooks_1.bootstrapSelectProps,
    setup(props, ctx) {
        const { validationClass, value: _model } = abstract_1.useSelectControl(props, ctx, Select_config_1.bootstrapSelectSizeRegistry);
        composition_api_1.onBeforeMount(() => {
            if (_model.value === '' || _model.value === null || _model.value === undefined) {
                ctx.emit('update:model', null);
            }
        });
        return { _model, validationClass };
    },
    template: `
    <div class="form-select">

      <!-- Main <select> element -->
      <BFormSelect v-model="_model" v-bind="{ disabled, name, options, readonly, required }"
                   class="form-select__control" :class="validationClass"
                   :id="$id()" :placeholder="placeholder || ' '" textField="label">
        <template #first>
          <BFormSelectOption :value="null" disabled>{{ $t('_.choose') }}</BFormSelectOption>
        </template>
      </BFormSelect>

      <!-- Label -->
      <label :for="$id()" class="form-select__label">
        {{ label }}
      </label>

      <!-- Validation errors -->
      <BootstrapFormError v-for="error in errors" :key="error">
        {{ error }}
      </BootstrapFormError>

    </div>
  `
});
