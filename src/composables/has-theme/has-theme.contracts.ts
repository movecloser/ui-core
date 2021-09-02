// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'

import { ClassRegistry } from '../../contracts'

export enum AbstractTheme {
  Default = 'default'
}

/**
 * Registry binding the element's theme with the applicable CSS class.
 */
export type ThemeRegistry<Theme extends string|number|symbol = AbstractTheme> = Partial<ClassRegistry<Theme>>;

export type UseThemeClassProvides = ComputedRef<string>;
