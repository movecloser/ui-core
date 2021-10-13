// Copyright © 2021 Move Closer

import { VueConstructor } from 'vue'

import stripHtml from './strip-html'
import trim from './trim'
import ucFirst from './uc-first'

export { default as stripHtml } from './strip-html'
export { default as trim } from './trim'
export { default as ucFirst } from './uc-first'

export const filters = { stripHtml, trim, ucFirst }

/**
 * Registers all custom Vue filters.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const registerFilters = (Vue: VueConstructor) => {
  for (const [name, filter] of Object.entries(filters)) {
    Vue.filter(name, filter)
  }
}
