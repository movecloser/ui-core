// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry, ThemeRegistry } from '../../../../composables'

import { BootstrapTheme } from '../../contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapButtonSizeMapClassRegistry: SizeRegistry = {
  [SizeMap.Large]: 'btn-lg',
  [SizeMap.Medium]: '',
  [SizeMap.Small]: 'btn-sm'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapButtonThemeClassRegistry: ThemeRegistry<BootstrapTheme> = {
  [BootstrapTheme.Primary]: 'btn-primary',
  [BootstrapTheme.Secondary]: 'btn-secondary'
}
