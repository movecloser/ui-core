// Copyright © 2021 Move Closer

import { PropType, Ref } from '@vue/composition-api'

import {
  AbstractTheme,
  hasSizeProp,
  Size,
  SizeRegistry,
  ThemeRegistry,
  useSizeClass,
  useThemeClass
} from '../../_composables'
import { ComponentObjectPropsOptions, Emit } from '../../_contracts'

import { AbstractButtonProps, UseButtonProvides } from './Button.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractButtonProps =
  <Theme extends string|number|symbol = AbstractTheme>(): ComponentObjectPropsOptions<AbstractButtonProps<Theme>> => ({
    ...hasSizeProp,

    /**
     * Determines whether the `<button>` should be disabled.
     */
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },

    /**
     * The theme of the `<button>`.
     */
    theme: {
      type: String as unknown as PropType<Theme>,
      required: false,
      default: () => AbstractTheme.Default
    }
  })

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useButton = <Theme extends string|number|symbol>(
  emit: Emit,
  size: Ref<Size>,
  sizeRegistry: SizeRegistry,
  theme: Ref<Theme>,
  themeRegistry: ThemeRegistry<Theme>
): UseButtonProvides => {
  const onClick = () => { emit('click') }

  const sizeClass = useSizeClass(size, sizeRegistry)
  const themeClass = useThemeClass(theme, themeRegistry)

  return { onClick, sizeClass, themeClass }
}
