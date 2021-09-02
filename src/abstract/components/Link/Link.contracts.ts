// Copyright © 2021 Move Closer

import { ComputedRef, Data } from '@vue/composition-api'
import { RawLocation } from 'vue-router'
import { TranslateResult } from 'vue-i18n'

import { CanBeDisabled } from '../../../composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractLinkProps extends CanBeDisabled, Data {
  /**
   * The link to render.
   */
  link: Link;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface Link {
  /**
   * Determines whether the link's target belongs to the app
   * or to the external resource.
   */
  isExternal?: boolean;

  /**
   * Link's label (text to render).
   */
  label?: string|TranslateResult;

  /**
   * Determines whether the link's target should be opened in a new browser's tab.
   */
  newTab?: boolean;

  /**
   * Link's target.
   *
   * @example internal (in-app) target:
   *   target: {
   *     path: '/profile/details'
   *   }
   *
   *   target: {
   *     name: 'root.home',
   *     params: { id: 123 }
   *   }
   *
   * @example external target:
   *   target: 'https://pudelek.pl'
   */
  target: RawLocation;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseLinkProvides {
  aTarget: ComputedRef<string>;
  hasCorrectTarget: ComputedRef<boolean>;
  external: ComputedRef<boolean>;
  label?: string|TranslateResult;
  target: RawLocation;
}
