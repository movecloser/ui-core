// Copyright © 2021 Move Closer

import { Data, WritableComputedRef } from '@vue/composition-api'

import { AbstractNavItem } from './partials'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractNavProps extends Data {
  /**
   * The ID of the currently-active item.
   */
  activeItem: string;

  /**
   * Items to render.
   */
  items: AbstractNavItem[];
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseNavProvides {
  _activeItem: WritableComputedRef<string>;
  activateItem: (id: string) => void;
  isItemActive: (id: string) => boolean;
}
