// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { useInputControl } from '../../_abstract'

import { BootstrapFormError } from '../FormError'

import { bootstrapTextAreaProps } from './TextArea.hooks'
import { BootstrapTextAreaProps } from './TextArea.contracts'
import { BootstrapTextAreaSizeRegistry } from './TextArea.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapTextArea = defineComponent({
  name: 'BootstrapTextAreaArea',
  components: { FormError: BootstrapFormError },
  props: bootstrapTextAreaProps,

  setup (props: BootstrapTextAreaProps, ctx: SetupContext) {
    const { sizeClass, validationClass, value: _model } = useInputControl(props, ctx, BootstrapTextAreaSizeRegistry)
    return { _model, sizeClass, validationClass }
  },

  template: `
    <div class="form-input form-text" :class="sizeClass">

      <!-- Main <textarea> element -->
      <textarea v-model="_model" v-bind="{ disabled, name, readonly, required, rows }" :id="$id()"
                class="form-input__control form-control" :class="validationClass"
                :placeholder="placeholder || ' '" />

      <!-- Label -->
      <label :for="$id()" class="form-input__label form-label">
        {{ label }}<span v-if="required" class="form-label__asterisk">&nbsp;*</span>
      </label>

      <!-- Validation errors -->
      <FormError v-for="error in errors" :key="$id(error)">
        {{ error }}
      </FormError>

    </div>
  `
})
