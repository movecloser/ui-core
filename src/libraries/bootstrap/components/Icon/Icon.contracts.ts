// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
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
   * Vue component that will be used to render the icon.
   */
  component: ComputedRef<VueConstructor | undefined>
}
