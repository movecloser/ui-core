// Copyright © 2021 Move Closer

import { defineComponent, toRefs } from '@vue/composition-api'

import { useButton } from '../../../../abstract'

import { BootstrapButtonProps } from './Button.contracts'
import { bootstrapButtonProps } from './Button.hooks'
import { bootstrapButtonSizeRegistry, bootstrapButtonThemeRegistry } from './Button.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapButton = defineComponent({
  name: 'BootstrapButton',
  props: bootstrapButtonProps,

  setup (props: BootstrapButtonProps, { emit }) {
    const { size, theme } = toRefs(props)

    const { onClick, sizeClass, themeClass } = useButton(
      emit, size, bootstrapButtonSizeRegistry, theme, bootstrapButtonThemeRegistry
    )

    return { onClick, sizeClass, themeClass }
  },

  template: `
    <button v-bind="{ disabled }" :class="['btn', sizeClass, themeClass]" @click="onClick">
      <slot />
    </button>
  `
})
