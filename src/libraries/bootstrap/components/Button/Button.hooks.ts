// Copyright © 2021 Move Closer

import { computed, ComputedRef, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { canBeDisabledProp } from '../../../../composables'

import { BootstrapSize } from '../../contracts'
import { getThemePropDefinition } from '../../composables'

import { BootstrapButtonProps, UseBootstrapButtonProvides } from './Button.contract'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const bootstrapButtonProps: ComponentObjectPropsOptions<BootstrapButtonProps> = {
  ...canBeDisabledProp,

  loading: {
    type: Boolean,
    required: false,
    default: false
  },

  outline: {
    type: Boolean,
    required: false,
    default: false
  },

  size: {
    type: String as PropType<BootstrapSize>,
    required: false,
    default: BootstrapSize.Normal
  },

  theme: getThemePropDefinition()
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapButton = (props: BootstrapButtonProps): UseBootstrapButtonProvides => {
  const loadingClass: ComputedRef<string> = computed(() => props.loading ? '--loading' : '')

  const variant: ComputedRef<string> = computed(() => props.outline ? `outline-${props.theme}` : props.theme)

  return { loadingClass, variant }
}
