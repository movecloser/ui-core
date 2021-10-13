// Copyright © 2021 Move Closer

import { AbstractInputControlProps } from '../../../../../abstract'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixTextAreaProps extends AbstractInputControlProps<DashmixTextAreaValueType> {
  /**
   * Value for the `[rows]` attribute of the `<textarea>` element.
   * @default 5
   */
  rows: number | undefined;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type DashmixTextAreaValueType = string
