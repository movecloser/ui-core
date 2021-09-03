// Copyright © 2021 Move Closer

import { ComputedRef, WritableComputedRef } from '@vue/composition-api'

import { FormControlBaseProps } from '../../_contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractInputControlProps<ModelType> extends FormControlBaseProps {
  /**
   * Value for the `[autocomplete]` attribute.
   */
  autocomplete: string;

  /**
   * Determines whether the control should be automatically focused.
   */
  autofocus: boolean;

  /**
   * Control's value, synced via `v-model`.
   */
  model: ModelType;
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
