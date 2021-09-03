// Copyright © 2021 Move Closer

import VueCompositionAPI from '@vue/composition-api'
import { BootstrapVue } from 'bootstrap-vue'
import { PluginObject, VueConstructor } from 'vue'

import { registerComponent } from '../../abstract'

import { BootstrapDSLConfiguration } from './contracts'

/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry: Record<string, VueConstructor> = {}

/**
 * Registers the Bootstrap DSL in the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapDSL: PluginObject<BootstrapDSLConfiguration> = {
  install (_Vue, configuration?: BootstrapDSLConfiguration) {
    if (typeof configuration === 'undefined') {
      configuration = {}
    }

    if (typeof configuration.prefix !== 'string' || configuration.prefix.length === 0) {
      configuration.prefix = 'Bs'
    }

    // Firstly, register the Composition API.
    // This line HAS TO come first, before any other plugins.
    _Vue.use(VueCompositionAPI)

    // Next, register additional plugins required for the Bootstrap DSL to work.
    _Vue.use(BootstrapVue)
    // _Vue.use(BootstrapVueIcons)
    // _Vue.use(UniqueId)
    // _Vue.use(VueI18n)
    // _Vue.use(VueRouter)

    _Vue.prototype.$dsl = configuration

    // Finally, register the components.
    for (const [name, component] of Object.entries(componentsRegistry)) {
      registerComponent(component, `${configuration.prefix}${name}`)
    }
  }
}
