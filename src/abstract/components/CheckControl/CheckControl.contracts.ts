// Copyright © 2021 Move Closer

import { ComputedRef, Ref, WritableComputedRef } from '@vue/composition-api'

import { FormControlBaseProps } from '../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractCheckControlOption<ValueType> {
  label: string;
  value: ValueType;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractCheckControlProps<ValueType> extends FormControlBaseProps {
  /**
   * Id of check control.
   */
  id: string|null;

  /**
   * Control's value, synced via `v-model`.
   */
  model: ValueType;

  /**
   * Determines whether the control allows selection of more than one option.
   */
  type: AbstractCheckControlType;

  /**
   * Value of control.
   */
  value: ValueType | true;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractCheckListProps<ValueType> extends FormControlBaseProps {
  /**
   * Control's value, synced via `v-model`.
   */
  model: AbstractCheckControlValueType<ValueType>;

  /**
   * Determines whether the control allows selection of more than one option.
   */
  multiple: boolean;

  /**
   * Array of the options available to select.
   */
  options: AbstractCheckControlOption<ValueType>[];
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type AbstractCheckControlType = 'checkbox' | 'radio'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type AbstractCheckControlValueType<ValueType> = ValueType|ValueType[]

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseCheckControlProvides<ValueType> {
  checked: WritableComputedRef<AbstractCheckControlValueType<ValueType>>;
  checkType: Ref<AbstractCheckControlType>;
}
