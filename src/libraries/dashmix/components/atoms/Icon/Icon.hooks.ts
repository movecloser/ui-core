// Copyright © 2021 Move Closer

import { computed, PropType, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { getSizePropDefinition, SizeMap, useSizeClass } from '../../../../../composables'

import { dashmixIconClassRegistry, dashmixIconSizeRegistry } from './Icon.config'
import { DashmixIconName, DashmixIconProps } from './Icon.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixIconProps: ComponentObjectPropsOptions<DashmixIconProps> = {
  /**
   * The name (identifier) of the icon that is to be displayed.
   */
  icon: {
    type: String as PropType<DashmixIconName>,
    required: true
  },

  /**
   * The icon's size.
   */
  size: getSizePropDefinition(SizeMap.Small),

  /**
   * Makes icon spin
   */
  spin: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Makes icon pulse (spin with only 8 frames)
   */
  pulse: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixIcon = (props: DashmixIconProps) => {
  const sizeClass = useSizeClass(toRef(props, 'size'), dashmixIconSizeRegistry)
  const additionalClasses = computed<string>(() => {
    return (props.spin ? ' fa-spin' : '') +
      (props.pulse ? ' fa-pulse' : '')
  })
  const iconClass = computed<string>(() => {
    // If the passed-in icon doesn't exist in the registry, return the `icon` prop as-is.
    if (
      !Object.prototype.hasOwnProperty.call(dashmixIconClassRegistry, props.icon) ||
      typeof dashmixIconClassRegistry[props.icon] !== 'string'
    ) {
      console.warn(`useDashmixIcon()->iconClass(): There's no entry for the [${props.icon}] icon name in the [dashmixIconClassRegistry]. Returning the [icon] prop as-is ([${props.icon}]).`)
      return props.icon + additionalClasses.value
    }

    return dashmixIconClassRegistry[props.icon] + additionalClasses.value
  })

  return { iconClass, sizeClass }
}
