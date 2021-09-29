import { ComputedRef } from '@vue/composition-api';
import { ClassRegistry } from '../../contracts';
/**
 * Registry binding the element's theme with the applicable CSS class.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type ThemeRegistry<Theme extends string | number | symbol> = Partial<ClassRegistry<Theme>>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseThemeClassProvides {
    themeClass: ComputedRef<string>;
}
