// Copyright © 2021 Move Closer

import { AbstractCheckControlValueType, AbstractCheckListProps } from '../../_abstract'
import { FormControlValue } from '../../_contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapCheckProps extends AbstractCheckListProps<FormControlValue> {
  /**
   * CSS class that will be applied to every `.form-check` element.
   */
  className?: string;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type BootstrapCheckValueType = AbstractCheckControlValueType<FormControlValue>
