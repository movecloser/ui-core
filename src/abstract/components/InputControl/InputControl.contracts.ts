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
