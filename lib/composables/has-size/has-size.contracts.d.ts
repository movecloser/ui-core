import { ComputedRef } from '@vue/composition-api';
import { ClassRegistry } from '../../contracts';
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
export declare type Size = SizeMap.Large | SizeMap.Medium | SizeMap.Small | SizeMap.XLarge | SizeMap.XSmall;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum SizeMap {
    Large = "large",
    Medium = "medium",
    Small = "small",
    XLarge = "x-large",
    XSmall = "x-small"
}
/**
 * Registry binding the element's size with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type SizeRegistry = Partial<ClassRegistry<SizeMap>>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type UseSizeClassProvides = ComputedRef<string>;
