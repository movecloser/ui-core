// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { AbstractTheme, HasSize, UseSizeClassProvides, UseThemeClassProvides } from '../../../composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractButtonProps<Theme extends string|number|symbol = AbstractTheme> extends HasSize, Data {
  /**
   * Determines whether the `<button>` should be disabled.
   */
  disabled: boolean;

  /**
   * The theme of the `<button>`.
   */
  theme: Theme;
}

export interface UseButtonProvides {
  onClick: () => void;
  sizeClass: UseSizeClassProvides;
  themeClass: UseThemeClassProvides;
}
