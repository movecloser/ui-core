// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry, ValidationClassMap } from '../../../../../composables'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixValidClasses: ValidationClassMap = {
  invalid: 'is-invalid',
  valid: 'is-valid'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixSizeClasses: SizeRegistry = {
  [SizeMap.Large]: 'form-control-lg',
  [SizeMap.Medium]: '',
  [SizeMap.Small]: 'form-control-sm',
  [SizeMap.XLarge]: 'form-control-lg',
  [SizeMap.XSmall]: 'form-control-sm'
}
