// Copyright © 2021 Move Closer

import Vue, { VueConstructor } from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import { registerComponent } from '../../abstract'

/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry: Record<string, VueConstructor> = {}

/**
 * Registers the Bootstrap DSL in the app.
 *
 * @param [prefix="Bs"] - The string that should be used to prefix each component's name.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const registerBootstrapDSL = (prefix: string = 'Bs'): void => {
  // Firstly, register the Composition API.
  // This line HAS TO come first, before any other plugins.
  Vue.use(VueCompositionAPI)

  // Next, register additional plugins required for the Bootstrap DSL to work.
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  // Vue.use(UniqueId)
  // Vue.use(VueI18n)
  // Vue.use(VueRouter)

  // Finally, register the components.
  for (const [name, component] of Object.entries(componentsRegistry)) {
    registerComponent(component, `${prefix}${name}`)
  }
}
