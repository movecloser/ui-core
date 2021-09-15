// Copyright © 2021 Move Closer

import { Ref, WritableComputedRef } from '@vue/composition-api'

import { FormControlBaseProps } from '../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractCheckControlOption<ModelType> {
  label: string;
  value: ModelType;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractCheckControlProps<ModelType> extends FormControlBaseProps<ModelType> {
  /**
   * Id of check control.
   */
  id: string|null;

  /**
   * Determines whether the control allows selection of more than one option.
   */
  type: AbstractCheckControlType;

  /**
   * Value of control.
   */
  value: ModelType | true;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractCheckListProps<ModelType> extends FormControlBaseProps {
  /**
   * Control's value, synced via `v-model`.
   */
  model: AbstractCheckControlModelType<ModelType>;

  /**
   * Determines whether the control allows selection of more than one option.
   */
  multiple: boolean;

  /**
   * Array of the options available to select.
   */
  options: AbstractCheckControlOption<ModelType>[];
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type AbstractCheckControlType = 'checkbox' | 'radio'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type AbstractCheckControlModelType<ModelType> = ModelType|ModelType[]

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseCheckControlProvides<ModelType> {
  checked: WritableComputedRef<AbstractCheckControlModelType<ModelType>>;
  checkType: Ref<AbstractCheckControlType>;
}
