// Copyright © 2021 Move Closer

import { PluginObject, VueConstructor } from 'vue'

import { registerDirectives } from './directives'
import { registerFilters } from './filters'

export * from './directives'
export * from './filters'

/**
 * Register all Vue extensions.
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const UICoreExtensions: PluginObject<any> = {
  // TODO: Add config to allow to register only chosen extension
  install (_Vue: VueConstructor) {
    registerDirectives(_Vue)
    registerFilters(_Vue)
  }
}
