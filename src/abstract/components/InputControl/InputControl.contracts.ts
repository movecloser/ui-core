// Copyright © 2021 Move Closer

import { ComputedRef, WritableComputedRef } from '@vue/composition-api'

import { FormControlBaseProps } from '../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractInputControlProps<ModelType> extends FormControlBaseProps<ModelType> {
  /**
   * Value for the `[autocomplete]` attribute.
   */
  autocomplete: string;

  /**
   * Determines whether the control should be automatically focused.
   */
  autofocus: boolean;

  /**
   * Determines whether the User's input should be automatically
   * typecast as a `Number` (see: https://vuejs.org/v2/guide/forms.html#number).
   */
  castAsNumber: boolean
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseInputControlProvides<ModelType> {
  hasErrors: ComputedRef<boolean>;
  sizeClass: ComputedRef<string>;
  validationClass: ComputedRef<string>;
  value: WritableComputedRef<ModelType>;
}
