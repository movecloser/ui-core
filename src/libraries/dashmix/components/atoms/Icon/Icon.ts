// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixIconProps } from './Icon.contracts'
import { dashmixIconProps, useDashmixIcon } from './Icon.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixIcon = defineComponent({
  name: 'DashmixIcon',
  props: dashmixIconProps,

  setup (props: DashmixIconProps) {
    return useDashmixIcon(props)
  },

  template: `
    <i class="icon" :class="[iconClass, sizeClass]" />
  `
})
