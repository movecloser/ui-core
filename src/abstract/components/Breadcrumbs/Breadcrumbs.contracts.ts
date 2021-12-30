// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'
import { RawLocation } from 'vue-router'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl> (edited)
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl> (original)
 */
export interface AbstractBreadcrumbsItem extends Data {
  /**
   * Determines whether the item points to the external resource.
   */
  isExternal?: boolean;

  /**
   * Item's text label.
   */
  label: string;

  /**
   * Item's target (you would probably want it to be an absolute path (e.g. `/foo/bar/baz`),
   * instead of relative one (e.g. `baz`)).
   */
  target: RawLocation;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractBreadcrumbsItemProps extends AbstractBreadcrumbsItem {
  active: boolean;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export interface AbstractBreadcrumbsProps extends Data {
  /**
   * Array of breadcrumbs to render.
   */
  items: AbstractBreadcrumbsItem[];

  /**
   * Determines whether the breadcrumbs should be rendered on mobile devices, too.
   */
  showOnMobile: boolean;
}
