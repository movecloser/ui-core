// Copyright © 2021 Move Closer

import { computed, defineComponent, SetupContext, toRefs } from '@vue/composition-api'

import { defaultValidationClassMap, Size, SizeMap } from '../../../../composables'
import { useInputControl } from '../../../../abstract'

import { BootstrapFormError } from '../FormError'
import { BootstrapIcon } from '../Icon'

import { bootstrapInputProps } from './Input.hooks'
import { BootstrapInputProps } from './Input.contracts'
import { bootstrapInputSizeRegistry } from './Input.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapInput = defineComponent({
  name: 'BootstrapInput',
  components: { BootstrapFormError, BootstrapIcon },
  props: bootstrapInputProps,

  setup (props: BootstrapInputProps, ctx: SetupContext) {
    const { size } = toRefs(props)

    const { sizeClass, validationClass, value: _model } = useInputControl(
      props,
      ctx,
      bootstrapInputSizeRegistry,
      defaultValidationClassMap,
      props.type === 'number' && props.castAsNumber
    )

    /**
     * Determines the size of the prepended icon
     */
    const iconSize = computed<Size>(() =>
      size.value === SizeMap.Medium ? SizeMap.Small : SizeMap.Medium
    )

    return { iconSize, _model, sizeClass, validationClass }
  },

  template: `
    <div class="form-input" :class="[sizeClass, icon ? '--with-icon' : '']">

    <!-- Main <input> element -->
    <input v-model="_model" v-bind="{ disabled, name, readonly, required, type, autocomplete }" :id="id ?? name"
           class="form-input__control" :class="validationClass"
           :placeholder="placeholder || ' '">

    <!-- Icon -->
    <BootstrapIcon v-if="icon" :name="icon" :size="iconSize" class="form-input__icon" />

    <!-- Label -->
    <label :for="id ?? name" class="form-input__label">
      {{ label }}
    </label>

    <!-- Validation errors -->
    <BootstrapFormError v-for="error in errors" :key="error">
      {{ error }}
    </BootstrapFormError>

    </div>
  `
})
