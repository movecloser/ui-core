// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { CanBeDisabled, HasErrors, HasSize } from '../composables'

/**
 * Registry that binds the passed-in `T` type with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type ClassRegistry<T extends string|number|symbol, CSSClass = string> = Record<T, CSSClass>

/**
 * Base FormControl props.
 */
export interface FormControlBaseProps extends CanBeDisabled, HasErrors, HasSize, Data {
  /**
   * Value for the `[name]` attribute.
   */
  name: string;

  /**
   * Value for the `[placeholder]` attribute.
   */
  placeholder: string|undefined;

  /**
   * Determines whether the element should be mutable.
   */
  readonly: boolean;

  /**
   * Determines whether the control should be marked as required.
   */
  required: boolean;

  /**
   * Determines whether the control should be marked as valid.
   */
  valid: boolean;
}

/**
 * Available UI form controls.
 */
export type FormControlType = 'email' | 'checkbox' | 'number' | 'password' | 'radio' | 'text'

/**
 * Available form control's value type.
 */
export type FormControlValue = string | number | boolean
