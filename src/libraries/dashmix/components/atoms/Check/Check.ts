// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixCheckProps } from './Check.contracts'
import { dashmixCheckProps, useDashmixCheck } from './Check.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixCheck = defineComponent({
  name: 'DashmixCheck',
  props: dashmixCheckProps,
  emits: ['update:model'],

  setup (props: DashmixCheckProps, ctx) {
    return useDashmixCheck(props, ctx)
  },

  template: `
    <div class="custom-control" :class="['custom-' + type, sizeClass, themeClass]">
    <input class="custom-control-input" :class="[validationClass]"
           :name="name" :id="id || name" v-model="checked" :value="value"
           v-bind="{ disabled, readonly, type }" />
    <label class="custom-control-label font-w400" :for="id || name">
      <slot>{{ label }}</slot>
    </label>
    </div>
  `
})
