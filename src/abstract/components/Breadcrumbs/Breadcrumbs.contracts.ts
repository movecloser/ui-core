// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'
import { RawLocation } from 'vue-router'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractBreadcrumbsItem extends Data {
  label: string;
  target: RawLocation;
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
