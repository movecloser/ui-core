// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import {
  ComponentObjectPropsOptions,
  FormControlModelType,
  FormControlType
} from '../../../../../contracts'
import { getAbstractInputControlProps } from '../../../../../abstract'

import { DashmixInputProps } from './Input.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixInputProps: ComponentObjectPropsOptions<DashmixInputProps> = {
  ...getAbstractInputControlProps<FormControlModelType>(),

  /**
   * Value for the `[type]` attribute.
   */
  type: {
    type: String as PropType<FormControlType>,
    required: false,
    default: 'text'
  }
}
