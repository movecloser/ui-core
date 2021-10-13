// Copyright © 2021 Move Closer

import { VueConstructor } from 'vue'

import closable from './closable'
import focus from './focus'

export { default as closable } from './closable'
export { default as focus } from './focus'

export const directives = { closable, focus }

/**
 * Registers all custom Vue directives.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const registerDirectives = (Vue: VueConstructor) => {
  for (const [name, handler] of Object.entries(directives)) {
    Vue.directive(name, handler)
  }
}
