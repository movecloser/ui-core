// Copyright © 2021 Move Closer

import { defineComponent, getCurrentInstance } from '@vue/composition-api'

import { BootstrapIconProps } from './Icon.contracts'
import { bootstrapIconProps, useBootstrapIcon } from './Icon.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapIcon = defineComponent({
  name: 'BootstrapIcon',
  props: bootstrapIconProps,

  setup (props: BootstrapIconProps) {
    const internalInstance = getCurrentInstance()
    const { component, _title } = useBootstrapIcon(props, internalInstance)
    return { component, _title }
  },

  template: `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" role="img" v-bind="{ height, width }">
    <title>{{ _title }}</title>
    <g :fill="color">
      <slot v-if="$slots.default" />
      <component v-else-if="component" :is="component" />
    </g>
    </svg>
  `
})
