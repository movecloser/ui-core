// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'

import { AbstractBadgeProps } from '../../../../abstract'
import { ClassRegistry } from '../../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapBadgeProps extends AbstractBadgeProps {
  /**
   * Badge's color (style) variant.
   */
  theme: BootstrapBadgeTheme;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapBadgeTheme {
  Black = 'black',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type BootstrapBadgeThemeClassRegistry = ClassRegistry<BootstrapBadgeTheme>

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapBadgeProvides {
  themeClass: ComputedRef<string>
}
