// Copyright © 2021 Move Closer

import { defineComponent, SetupContext, toRef } from '@vue/composition-api'

import { useSyncModel } from '../../../../../composables'

import { dashmixTextAreaProps } from './TextArea.hooks'
import { DashmixTextAreaProps } from './TextArea.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixTextArea = defineComponent({
  name: 'DashmixTextArea',
  props: dashmixTextAreaProps,

  setup (props: DashmixTextAreaProps, ctx: SetupContext) {
    const value = useSyncModel(toRef(props, 'model'), ctx)
    return { value }
  },

  template: `
    <textarea class='form-control' v-model="value" v-bind="$props" />
  `
})
