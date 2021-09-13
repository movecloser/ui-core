// Copyright © 2021 Move Closer

import Vue, { VueConstructor } from 'vue'
import { AnyObject } from '@movecloser/front-core'
import { inject } from '@vue/composition-api'

import { DSL_CONFIG_INJECTION_KEY } from './config'

/**
 * Resolves the provided DSL configuration object.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const getDSLConfig = <Config extends AnyObject>(): Config => {
  const config = inject<Config>(DSL_CONFIG_INJECTION_KEY)

  if (typeof config === 'undefined') {
    throw new Error(`getDSLConfig(): FATAL ERROR! Failed to inject the DSL configuration! Did you provide the configuration object under the [${DSL_CONFIG_INJECTION_KEY.toString()}] InjectionKey?`)
  }

  return config
}

/**
 * Registers the passed-in Vue component in the app.
 *
 * @param component - The Vue component to register.
 * @param [name] - The name under which the component should be available in the `<template>` section.
 *   If not specified, component will be registered under the identifier from the `component.name` property.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const registerComponent = (component: VueConstructor, name?: string): void => {
  /**
   * The identifier under which the component should be registered.
   */
  const id: string = typeof name === 'string' && name.length > 0 ? name : component.name

  Vue.component(id, component)
}
