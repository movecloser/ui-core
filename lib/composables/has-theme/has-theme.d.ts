import { Ref } from '@vue/composition-api';
import { ThemeRegistry, UseThemeClassProvides } from './has-theme.contracts';
/**
 * @param theme - Component's `theme` reactive reference.
 * @param themeClassRegistry - registry with class-theme definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useThemeClass: <Theme extends string | number | symbol>(theme: Ref<Theme>, themeClassRegistry: Partial<Record<Theme, string>>) => UseThemeClassProvides;
