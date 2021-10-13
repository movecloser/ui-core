// Copyright © 2021 Move Closer

import VueCompositionAPI from '@vue/composition-api'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import VueUniqueId from 'vue-unique-id'
import { PluginObject, VueConstructor } from 'vue'

import { DSL_CONFIG_INJECTION_KEY, uniqueIdConfig } from '../../config'
import { registerComponent } from '../../helpers'

import { BootstrapDSLConfiguration } from './contracts'
import {
  BootstrapBadge,
  BootstrapBreadcrumbs,
  BootstrapButton,
  BootstrapCheck,
  BootstrapFormError,
  BootstrapIcon,
  BootstrapImage,
  BootstrapInput,
  BootstrapLink,
  BootstrapPagination,
  BootstrapTable
} from './components'

/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry: Record<string, VueConstructor> = {
  Badge: BootstrapBadge,
  Breadcrumbs: BootstrapBreadcrumbs,
  Button: BootstrapButton,
  Check: BootstrapCheck,
  FormError: BootstrapFormError,
  Icon: BootstrapIcon,
  Image: BootstrapImage,
  Input: BootstrapInput,
  Link: BootstrapLink,
  Pagination: BootstrapPagination,
  Table: BootstrapTable
}

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

    _Vue.mixin({
      provide: { [DSL_CONFIG_INJECTION_KEY]: configuration }
    })

    // Firstly, register the Composition API.
    // This line HAS TO come first, before any other plugins.
    _Vue.use(VueCompositionAPI)

    if (typeof configuration.uidConfig !== 'object' || configuration.uidConfig === null) {
      configuration.uidConfig = uniqueIdConfig
    }

    // Next, register additional plugins required for the Bootstrap DSL to work.
    _Vue.use(VueI18n)
    _Vue.use(VueRouter)
    _Vue.use(
      VueUniqueId,
      configuration.uidConfig
    )

    // Finally, register the components.
    for (const [name, component] of Object.entries(componentsRegistry)) {
      registerComponent(component, `${configuration.prefix}${name}`)
    }
  }
}
