// Copyright © 2021 Move Closer

import { computed, PropType } from '@vue/composition-api'

import { abstractBadgeProps } from '../../../../abstract'
import { ComponentObjectPropsOptions } from '../../../../contracts'

import { BootstrapBadgeProps, BootstrapBadgeTheme, UseBootstrapBadgeProvides } from './Badge.contracts'
import { bootstrapBadgeThemeClassRegistry } from './Badge.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapBadgeProps: ComponentObjectPropsOptions<BootstrapBadgeProps> = {
  ...abstractBadgeProps,

  /**
   * Badge's color (style) variant.
   */
  theme: {
    type: String as PropType<BootstrapBadgeTheme>,
    required: false,
    default: BootstrapBadgeTheme.Red
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapBadge = (props: BootstrapBadgeProps): UseBootstrapBadgeProvides => {
  /**
   * CSS class defining the badge's color (style) variant.
   */
  const themeClass = computed<string>(() => {
    if (typeof bootstrapBadgeThemeClassRegistry[props.theme] !== 'string') {
      console.warn(`useBootstrapBadge(): Provided registry does NOT contain the given key.\nFalling back to the first key in the set, which is [${Object.keys(bootstrapBadgeThemeClassRegistry)[0]}].`)

      return Object.values(bootstrapBadgeThemeClassRegistry)[0]
    }

    return bootstrapBadgeThemeClassRegistry[props.theme]
  })

  return { themeClass }
}
