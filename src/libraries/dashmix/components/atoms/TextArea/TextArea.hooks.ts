// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { getAbstractInputControlProps } from '../../../../../abstract'

import { DashmixTextAreaProps, DashmixTextAreaValueType } from './TextArea.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixTextAreaProps: ComponentObjectPropsOptions<DashmixTextAreaProps> = {
  ...getAbstractInputControlProps<DashmixTextAreaValueType>(),

  /**
   * Value for the `[rows]` attribute of the main `<textarea>` element.
   * @default 5
   */
  rows: {
    type: Number,
    required: false,
    default: 5
  }
}
