// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { getAbstractInputControlProps } from '../../../../abstract'

import { BootstrapInputProps, BootstrapInputType, BootstrapInputValueType } from './Input.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapInputProps: ComponentObjectPropsOptions<BootstrapInputProps> = {
  ...getAbstractInputControlProps<BootstrapInputValueType>(),

  /**
   * The name of the icon that is to be prepended to the `<input>`.
   */
  icon: {
    type: String as PropType<string>,
    required: false
  },

  /**
   * Content for the `<label>` element.
   */
  label: {
    type: String as PropType<string>,
    required: false
  },

  /**
   * Value for the `[type]` attribute.
   */
  type: {
    type: String as PropType<BootstrapInputType>,
    required: false,
    default: BootstrapInputType.Text
  }
}
