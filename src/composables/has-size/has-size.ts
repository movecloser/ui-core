// Copyright © 2021 Move Closer

import { computed, PropOptions, PropType, Ref } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../contracts'

import { HasSize, Size, SizeMap, SizeRegistry, UseSizeClassProvides } from './has-size.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getSizePropDefinition = (defaultSize = SizeMap.Medium): PropOptions => {
  return {
    type: String as PropType<Size>,
    required: false,
    default: defaultSize
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const hasSizeProp: ComponentObjectPropsOptions<HasSize> = {
  size: getSizePropDefinition()
}

/**
 * @param size - Component's `size` reactive reference.
 * @param sizeClassRegistry - registry that should be used
 *  to determine the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useSizeClass = (
  size: Ref<Size>,
  sizeClassRegistry: SizeRegistry
): UseSizeClassProvides => {
  return computed<string>(() => {
    if (typeof sizeClassRegistry[size.value] !== 'string') {
      if (!Object.keys(sizeClassRegistry).length) {
        console.warn(
          'useSizeClass(): Provided registry does NOT contain any definition. Used no class.')
      }

      console.warn(`useSizeClass(): Provided registry does NOT contain the given key.\nFalling back to the first key in the set, which is [${Object.keys(
        sizeClassRegistry)[0]}].`)

      return Object.values(sizeClassRegistry)[0] as string
    }

    return sizeClassRegistry[size.value] as string
  })
}
