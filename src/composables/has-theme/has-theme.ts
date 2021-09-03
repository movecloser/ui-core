// Copyright © 2021 Move Closer

import { computed, Ref } from '@vue/composition-api'

import { ThemeRegistry, UseThemeClassProvides } from './has-theme.contracts'

/**
 * @param theme - Component's `theme` reactive reference.
 * @param themeClassRegistry - registry with class-theme definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useThemeClass = <Theme extends string | number | symbol> (
  theme: Ref<Theme>,
  themeClassRegistry: ThemeRegistry<Theme>
): UseThemeClassProvides => {
  const themeClass = computed<string>(() => {
    if (typeof themeClassRegistry[theme.value] !== 'string') {
      if (!Object.keys(themeClassRegistry).length) {
        console.warn('useThemeClass(): Provided registry does NOT contain any definition. Used no class.')
      }

      console.warn(
        `useThemeClass(): Provided registry does NOT contain the given key.\nFalling back to the first key in the set, which is [${Object.keys(themeClassRegistry)[0]}].`
      )

      return Object.values(themeClassRegistry)[0] as string
    }

    return themeClassRegistry[theme.value] as string
  })

  return { themeClass }
}
