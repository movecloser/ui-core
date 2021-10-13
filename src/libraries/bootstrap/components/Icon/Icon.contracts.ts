// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { TranslateResult } from 'vue-i18n'
import { VueConstructor } from 'vue'

import { AbstractIconProps } from '../../../../abstract'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapIconProps extends AbstractIconProps {
  /**
   * Color of the icon.
   *
   * @default "currentColor"
   */
  color: string;

  /**
   * Height of the icon.
   *
   * @default "1em"
   */
  height: number | string;

  /**
   * Human-readable title of the icon (for the A11Y purposes).
   */
  title: string;

  /**
   * Width of the icon.
   *
   * @default "1em"
   */
  width: number | string;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapIconProvides {
  /**
   * String to inject into the `<title>` element.
   */
  _title: ComputedRef<string | TranslateResult>
  /**
   * Vue component that will be used to render the icon.
   */
  component: ComputedRef<VueConstructor | undefined>
}
