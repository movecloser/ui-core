// Copyright © 2021 Move Closer

import { BFormGroup } from 'bootstrap-vue'
import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapFormError } from '../FormError'

import { BootstrapCheckProps } from './Check.contracts'
import { bootstrapCheckProps, useBootstrapCheck } from './Check.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl>
 */
export const BootstrapCheck = defineComponent({
  name: 'BootstrapCheck',
  components: { BFormGroup, BootstrapFormError },
  props: bootstrapCheckProps,
  emits: ['update:model'],

  setup (props: BootstrapCheckProps, ctx: SetupContext) {
    const { checked, checkType, component, validationClass } = useBootstrapCheck(props, ctx)
    return { checked, checkType, component, validationClass }
  },

  template: `
    <fieldset v-bind="{ disabled }">
    <legend :class="{ 'sr-only': !isLegendVisible}">{label}</legend>
      <component :is="component" v-model="checked" v-bind="{ disabled, name, options, readonly, required, stacked }"
                 class="form-check" :class="validationClass"
                 text-field="label" :id="name" :aria-describedby="ariaDescribedby"/>

      <!-- Validation errors -->
      <BootstrapFormError v-for="error in errors" :key="error">
        {{ error }}
      </BootstrapFormError>
    </fieldset>
  `
})
