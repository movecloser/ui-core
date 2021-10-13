// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { SizeMap } from '../../../../../../composables'

import { DashmixTheme } from '../../../../contracts'

import { DashmixButton, DashmixIcon, DashmixIconName, DashmixInput } from '../../../atoms'
import { DashmixInputGroup } from '../../InputGroup'

import { inputTypeaheadProps, useInputTypeahead } from './InputTypeahead.hook'
import { InputTypeaheadProps } from './InputTypeahead.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const InputTypeahead = defineComponent({
  name: 'InputTypeahead',
  components: { DashmixInputGroup, DashmixIcon, DashmixButton, DashmixInput },
  props: inputTypeaheadProps,
  emits: ['onClear', 'onInput', 'focus', 'blur'],

  setup (props: InputTypeaheadProps, ctx: SetupContext) {
    return {
      ...useInputTypeahead(props, ctx),
      buttonTheme: DashmixTheme,
      icons: DashmixIconName,
      sizes: SizeMap
    }
  },

  template: `
    <DashmixInputGroup :class="disabled ? '--disabled' : ''" :size="size">
    <template v-slot:prependText>
      <DashmixIcon :icon="loading ? icons.SpinnerSolid : icons.SearchSolid"
                   class="typeahead__search-icon" />
    </template>

    <DashmixInput :model.sync="value"
                  v-bind="{ name, placeholder, disabled, size }"
                  v-focus="autofocus"
                  @focus="() => $emit('focus')" @blur="() => $emit('blur')" />

    <template v-if="clearable && !disabled">
      <DashmixButton variant="icon" :icon="icons.TimesSolid" :theme="buttonTheme.Dark"
                     :size="sizes.Small"
                     @click="() => $emit('onClear')" v-slot:appendText />
    </template>
    </DashmixInputGroup>
  `
})
