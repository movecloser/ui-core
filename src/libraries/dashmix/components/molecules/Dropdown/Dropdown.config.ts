// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry, ThemeRegistry } from '../../../../../composables'

import {
  DropdownAlignmentMap,
  DropdownPositionMap
} from '../../../../../abstract/components/Dropdown'

import { DashmixTheme } from '../../../contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixDropdownAlignClassRegistry: ThemeRegistry<DropdownAlignmentMap> = {
  [DropdownAlignmentMap.Left]: '',
  [DropdownAlignmentMap.Right]: 'dropdown-menu-right'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixDropdownItemClassRegistry: ThemeRegistry<DashmixTheme> = {
  [DashmixTheme.Default]: '',
  [DashmixTheme.Danger]: 'text-danger',
  [DashmixTheme.Dark]: 'text-dark',
  [DashmixTheme.Info]: 'text-info',
  [DashmixTheme.Light]: 'text-light',
  [DashmixTheme.Primary]: 'text-primary',
  [DashmixTheme.Success]: 'text-success',
  [DashmixTheme.Warning]: 'text-warning'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixDropdownPositionClassRegistry: ThemeRegistry<DropdownPositionMap> = {
  [DropdownPositionMap.Down]: '',
  [DropdownPositionMap.Left]: 'dropleft push',
  [DropdownPositionMap.Right]: 'dropright push',
  [DropdownPositionMap.Up]: 'dropup'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixDropdownSizeClassRegistry: SizeRegistry = {
  [SizeMap.Large]: 'btn-lg',
  [SizeMap.Medium]: '',
  [SizeMap.Small]: 'btn-sm',
  [SizeMap.XLarge]: 'btn-lg',
  [SizeMap.XSmall]: 'btn-sm'
}
