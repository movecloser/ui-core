// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapCheckProps } from './Check.contracts'
import { bootstrapCheckProps, useBootstrapCheck } from './Check.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapCheck = defineComponent({
  name: 'BootstrapCheck',
  props: bootstrapCheckProps,
  emits: ['update:model'],

  setup (props: BootstrapCheckProps, ctx: SetupContext) {
    const { checked, checkType, component } = useBootstrapCheck(props, ctx)
    return { checked, checkType, component }
  },

  template: `
    <b-form-group v-bind="{ disabled, label, readonly }" v-slot="{ ariaDescribedby }">
      <component :is="component" v-model="checked" v-bind="{ name, options }"
                 text-field="label" :id="name" :aria-describedby="ariaDescribedby" />
    </b-form-group>
  `
})
