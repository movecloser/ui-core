// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'

import { ClassRegistry } from '../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface HasSize<S = Size> {
  size: S;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type Size = SizeMap.Large | SizeMap.Medium | SizeMap.Small | SizeMap.XLarge | SizeMap.XSmall;

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export enum SizeMap {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XLarge = 'x-large',
  XSmall = 'x-small'
}

/**
 * Registry binding the element's size with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type SizeRegistry = Partial<ClassRegistry<SizeMap>>

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseSizeClassProvides {
  sizeClass: ComputedRef<string>
}
