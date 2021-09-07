// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry } from '../../../composables'

type SizeControlOptions = Partial<Record<SizeMap, string>>

/**
 * Filters the `SizeMap` enum end returns only those key-value pairs
 * that are defined in the passed-in `SizeRegistry`.
 *
 * @param sizeRegistry - Registry binding the element's size with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const getSizeControlOptions = (sizeRegistry: SizeRegistry): SizeControlOptions => {
  return Object.entries(SizeMap)
    .filter(([key, value]) => typeof sizeRegistry[value] === 'string')
    .reduce<SizeControlOptions>((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}
