// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { SwitchesProps } from './Switch.contracts'
import { useSwitches, useSwitchesProps } from './Switch.hook'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const DashmixSwitch = defineComponent({
  name: 'DashmixSwitch',
  props: useSwitchesProps,
  emits: ['onChange'],

  setup (props: SwitchesProps, ctx: SetupContext) {
    return useSwitches(props, ctx)
  },
  template: `
    <div class="custom-control custom-switch" :class="[themeClass, sizeClass ]">
    <template v-if="Array.isArray(options)">
      <label :for="name" class="pr-2 m-0">
        {{ $t(options[0].label) }}
      </label>
    </template>
    <input
        type="checkbox" class="custom-control-input"
        :id="name" :name="name"
        v-model="model" v-bind="{ disabled }" />
    <label class="custom-control-label" :for="name">
      {{ Array.isArray(options) ? $t(options[1].label) : $t(options.label) }}
    </label>
    </div>
  `
})
