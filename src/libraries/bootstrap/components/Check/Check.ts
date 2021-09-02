// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { useCheckControl } from '../../../../abstract'

import { BootstrapFormError } from '../FormError'

import { BootstrapCheckProps, BootstrapCheckValueType } from './Check.contracts'
import { bootstrapCheckSizeRegistry } from './Check.config'
import { bootstrapCheckProps } from './Check.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapCheck = defineComponent({
  name: 'BootstrapCheck',
  components: { FormError: BootstrapFormError },
  props: bootstrapCheckProps,

  setup (props: BootstrapCheckProps, ctx: SetupContext) {
    const { checked, hasErrors, sizeClass, checkType, validationClass } =
      useCheckControl<BootstrapCheckValueType>(props, ctx, bootstrapCheckSizeRegistry)

    return { checked, hasErrors, sizeClass, checkType, validationClass }
  },

  template: `
    <div>
      <!-- Options -->
      <div v-for="option in options" :key="$id(option.label)"
           class="form-check" :class="[className, sizeClass, validationClass]" >

        <!-- Input (mainly for the a11y purposes) -->
        <input :type="checkType" :id="$id(option.label)"
               :value="option" v-model="checked"
               v-bind="{ disabled, name, readonly, required }"
               :class="'form-check__control form-control ' + validationClass">

        <!-- Label (renders actual input with ::before and ::after pseudo-elements) -->
        <label :for="$id(option.label)" class="form-check__label form-label">
          {{ option.label }}<span v-if="required" class="form-label__asterisk">&nbsp;*</span>
        </label>

      </div>
      <!-- END | Options -->

      <!-- Validation errors -->
      <FormError v-for="error in errors" :key="$id(error)">
        {{ error }}
      </FormError>
    </div>
  `
})
