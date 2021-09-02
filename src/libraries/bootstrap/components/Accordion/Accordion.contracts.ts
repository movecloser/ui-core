// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { IBootstrapAccordionItem } from './partials'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface BootstrapAccordionProps extends Data {
  /**
   * The index of an item that should be opened by default.
   */
  defaultOpen?: number;

  /**
   * Index of the item that should be closed.
   *
   * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
   * In order to work properly it **has to be able to detect a change**
   * on the prop itself. To achieve that, you should first set its value to `-1`
   * and only then, **using the `$nextTick()` helper**, set the desired, target value.
   * This way you make sure that the value actually **changes**
   * and the `watch()` callback gets rightly called.
   */
  itemToClose?: number;

  /**
   * Index of the item that should be opened.
   *
   * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
   * In order to work properly it **has to be able to detect a change**
   * on the prop itself. To achieve that, you should first set its value to `-1`
   * and only then, **using the `$nextTick()` helper**, set the desired, target value.
   * This way you make sure that the value actually **changes**
   * and the `watch()` callback gets rightly called.
   */
  itemToOpen?: number;

  /**
   * Index of the item that should be toggled.
   *
   * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
   * In order to work properly it **has to be able to detect a change**
   * on the prop itself. To achieve that, you should first set its value to `-1`
   * and only then, **using the `$nextTick()` helper**, set the desired, target value.
   * This way you make sure that the value actually **changes**
   * and the `watch()` callback gets rightly called.
   */
  itemToToggle?: number;

  /**
   * The items to render.
   */
  items: IBootstrapAccordionItem[];

  /**
   * Determines whether the component should disallow opening more than one item at a time.
   */
  onlySingleOpen: boolean;

  /**
   * HTML tag that should be used as a root element of the accordion.
   *
   * @default 'ul'
   */
  tag: 'ul'|'ol';
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapAccordionProvides {
  canItemBeOpen: (itemIndex: number) => boolean;
  isItemOpen: (itemIndex: number) => boolean;
  onItemToggle: (itemIndex: number) => void;
  onItemChanged: (from: string, payload: Data) => void;
}
