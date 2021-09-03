// Copyright © 2021 Move Closer

import { ComputedRef, Data } from '@vue/composition-api'

import { CanBeDisabled } from '../../../../composables'

import { BootstrapSize, BootstrapTheme } from '../../contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface BootstrapButtonProps extends Data, CanBeDisabled {
  /**
   * Determines whether the component should display a loading indicator.
   *
   * @default false
   */
  loading: boolean;

  /**
   * Button's size.
   *
   * @default BootstrapSize.Normal
   */
  size: BootstrapSize;

  /**
   * Button's theme (colour variant).
   *
   * @default BootstrapTheme.Primary
   */
  theme: BootstrapTheme;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapButtonProvides {
  loadingClass: ComputedRef<string>
}
