// Copyright © 2021 Move Closer

import { computed, PropType, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { DashmixTheme } from '../../../contracts'
import { useThemeClass } from '../../../../../composables'

import {
  DashmixBadgeProps,
  DashmixBadgeShape,
  DashmixBadgeVariant,
  DashmixBadgeVariantMap
} from './Badge.contracts'
import {
  dashmixBadgeShapeRegistry,
  dashmixBadgeThemeRegistry,
  dashmixBadgeVariantRegistry
} from './Badge.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixBadgeProps: ComponentObjectPropsOptions<DashmixBadgeProps> = {
  /**
   * Badge's label (text content).
   */
  label: {
    type: String,
    required: false,
    default: ''
  },

  /**
   * Badge's shape.
   */
  shape: {
    type: String as PropType<DashmixBadgeShape>,
    required: false,
    default: DashmixBadgeShape.Pill
  },

  /**
   * Badge's theme (style).
   */
  theme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: DashmixTheme.Default
  },

  /**
   * Badge's variant (style variant).
   */
  variant: {
    type: String as PropType<DashmixBadgeVariant>,
    required: false,
    default: DashmixBadgeVariantMap.Default
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixBadge = (props: DashmixBadgeProps) => {
  const shapeClass = useThemeClass(toRef(props, 'shape'), dashmixBadgeShapeRegistry)

  const themePart = useThemeClass(toRef(props, 'theme'), dashmixBadgeThemeRegistry)
  const variantPart = useThemeClass<DashmixBadgeVariant>(
    toRef(props, 'variant'),
    dashmixBadgeVariantRegistry
  )
  const styleClass = computed<string>(() => `badge${variantPart.themeClass.value}${themePart.themeClass.value}`)

  return { shapeClass: shapeClass.themeClass, styleClass }
}
