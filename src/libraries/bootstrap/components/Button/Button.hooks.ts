// Copyright © 2021 Move Closer

import { computed, ComputedRef, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { canBeDisabledProps } from '../../../../composables'

import { BootstrapSize, BootstrapTheme } from '../../contracts'

import { BootstrapButtonProps, UseBootstrapButtonProvides } from './Button.contract'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const bootstrapButtonProps: ComponentObjectPropsOptions<BootstrapButtonProps> = {
  ...canBeDisabledProps,

  loading: {
    type: Boolean,
    required: false,
    default: false
  },

  size: {
    type: String as PropType<BootstrapSize>,
    required: false,
    default: BootstrapSize.Normal
  },

  theme: {
    type: String as PropType<BootstrapTheme>,
    required: false,
    default: BootstrapTheme.Primary
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapButton = (props: BootstrapButtonProps): UseBootstrapButtonProvides => {
  const loadingClass: ComputedRef<string> = computed<string>(() => props.loading ? '--loading' : '')
  return { loadingClass }
}
