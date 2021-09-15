// Copyright © 2021 Move Closer

import { ComputedRef, WritableComputedRef } from '@vue/composition-api'

import { FormControlBaseProps } from '../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractSelectControlOption {
  /**
   * Option's label, visible to the User.
   */
  label: string;

  /**
   * Option's value, will be mapped to the control's `model` property.
   */
  value: unknown;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractSelectControlProps<ModelType> extends FormControlBaseProps<ModelType> {
  /**
   * Array of options available for the User to choose from.
   */
  options: AbstractSelectControlOption[];
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseSelectControlProvides<ModelType> {
  hasErrors: ComputedRef<boolean>;
  sizeClass: ComputedRef<string>;
  validationClass: ComputedRef<string>;
  value: WritableComputedRef<ModelType>;
}
