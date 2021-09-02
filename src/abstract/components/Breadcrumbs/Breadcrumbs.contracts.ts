// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'
import { RawLocation } from 'vue-router'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface BreadcrumbsItem extends Data {
  label: string;
  target: RawLocation;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface BreadcrumbsItemProps extends BreadcrumbsItem {
  active: boolean;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export interface BreadcrumbsProps extends Data {
  /**
   * Breadcrumbs list.
   */
  items: BreadcrumbsItem[];

  /**
   * Root breadcrumb.
   */
  root: BreadcrumbsItem;

  /**
   * Show breadcrumb on mobile screen
   */
  showOnMobile?: boolean;
}
