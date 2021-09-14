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
   * Determines whether the button should be rendered with the appearance of a link
   * while maintaining the default padding and size of a button.
   *
   * @default false
   */
  link: boolean;

  /**
   * Determines whether the component should display a loading indicator.
   *
   * @default false
   */
  loading: boolean;

  /**
   * Determines whether the button's theme color should be applied
   * to the outline (border), instead of the background (fill).
   *
   * @default false
   */
  outline: boolean;

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
  /**
   * CSS class that - if present - determines that the button is currently in the "loading" state.
   */
  loadingClass: ComputedRef<string>

  /**
   * Computed value for the `variant` prop of the `<b-button>` component.
   */
  variant: ComputedRef<string>
}
