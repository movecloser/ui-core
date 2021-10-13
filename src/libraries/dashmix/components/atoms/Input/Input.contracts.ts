// Copyright © 2021 Move Closer

import { AbstractInputControlProps } from '../../../../../abstract'
import { FormControlModelType, FormControlType } from '../../../../../contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixInputProps extends AbstractInputControlProps<FormControlModelType> {
  /**
   * Value for the `[type]` attribute.
   */
  type: FormControlType;
}
