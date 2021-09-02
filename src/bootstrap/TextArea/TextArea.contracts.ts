// Copyright © 2021 Move Closer

import { AbstractInputControlProps } from '../../_abstract'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapTextAreaProps extends AbstractInputControlProps<BootstrapTextAreaValueType> {
  /**
   * Content for the `<label>` element.
   */
  label: string;

  /**
   * Value for the `[rows]` attribute of the main `<textarea>` element.
   * @default 5
   */
  rows: number|undefined;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type BootstrapTextAreaValueType = string
