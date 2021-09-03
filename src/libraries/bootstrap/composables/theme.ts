// Copyright © 2021 Move Closer

import { PropOptions, PropType } from '@vue/composition-api'

import { BootstrapTheme } from '../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getThemePropDefinition = (defaultTheme = BootstrapTheme): PropOptions => {
  return {
    type: String as PropType<BootstrapTheme>,
    required: false,
    default: defaultTheme
  }
}
