// Copyright © 2021 Move Closer

import { BFormSelect, BFormSelectOption } from 'bootstrap-vue'
import { defineComponent, onBeforeMount, SetupContext } from '@vue/composition-api'

import { useSelectControl } from '../../../../abstract'

import { BootstrapFormError } from '../FormError'

import { bootstrapSelectProps } from './Select.hooks'
import { BootstrapSelectProps } from './Select.contracts'
import { bootstrapSelectSizeRegistry } from './Select.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapSelect = defineComponent({
  name: 'BootstrapSelect',
  components: { BootstrapFormError, BFormSelect, BFormSelectOption },
  props: bootstrapSelectProps,

  setup (props: BootstrapSelectProps, ctx: SetupContext) {
    const { validationClass, value: _model } = useSelectControl(
      props,
      ctx,
      bootstrapSelectSizeRegistry
    )

    onBeforeMount(() => {
      if (_model.value === '' || _model.value === null || _model.value === undefined) {
        ctx.emit('update:model', null)
      }
    })

    return { _model, validationClass }
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
})
