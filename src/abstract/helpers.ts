// Copyright © 2021 Move Closer

import Vue, { VueConstructor } from 'vue'

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
