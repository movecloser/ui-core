// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { FormControlModelType } from '../../../../../contracts'
import { useInputControl } from '../../../../../abstract'

import { DashmixInputProps } from './Input.contracts'
import { dashmixInputProps } from './Input.hooks'
import { dashmixSizeClasses, dashmixValidClasses } from './Input.maps'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixInput = defineComponent({
  name: 'DashmixInput',
  props: dashmixInputProps,
  emits: ['blur', 'focus', 'input', 'update:model'],

  setup: (props: DashmixInputProps, ctx: SetupContext) => {
    return useInputControl<FormControlModelType>(
      props,
      ctx,
      dashmixSizeClasses,
      dashmixValidClasses,
      props.type === 'number' && props.castAsNumber
    )
  },

  template: `
    <input v-model="value" v-focus="autofocus"
           v-bind="{ autocomplete, disabled, placeholder, readonly, required, type }"
           class="form-control custom" :class="[sizeClass, validationClass]"
           @focus="() => $emit('focus')" @blur="() => $emit('blur')"
           @input="(e) => $emit('input', e)" />
  `
})
