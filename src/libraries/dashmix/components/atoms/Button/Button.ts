// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixIcon, DashmixIconName } from '../Icon'

import { DashmixButtonProps } from './Button.contract'
import { dashmixButtonProps, useDashmixButton } from './Button.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixButton = defineComponent({
  name: 'DashmixButton',
  components: { DashmixIcon },
  props: dashmixButtonProps,
  emits: ['click'],

  setup (props: DashmixButtonProps, ctx: SetupContext) {
    return { ...useDashmixButton(props, ctx), DashmixIconName }
  },

  template: `
    <button type="button" class="btn" :class="[sizeClass, styleClass, { loading }]"
            :disabled="loading || disabled"
            @click="handleClick">
    <span :class="{ 'animated flash': isPendingClick }">
        <slot name="before" />

        <slot name="loader">
          <DashmixIcon v-if="loading" :icon="DashmixIconName.SpinnerSolid"
                       :class="{ 'mr-2': message }" />
        </slot>

        <slot>
          <DashmixIcon v-if="!loading && icon" v-bind="{ icon }"
                       :class="{ 'mr-0 mr-sm-2': message }" />
          <span v-if="message"
                :class="{ 'd-none d-sm-inline': icon && !alwaysWithLabel }">{{ message }}</span>
        </slot>

        <slot name="after" />
      </span>
    </button>
  `
})
