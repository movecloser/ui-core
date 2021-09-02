// Copyright © 2021 Move Closer

import { DSLLibrary, libraryRegisterFnRegistry } from './config'

export * from './abstract'
export * from './composables'
export * from './contracts'
export * from './config'

export * from './libraries/bootstrap'

/**
 * Registers the DSL components library in the app.
 *
 * @param library - The library that is to be registered.
 * @param [prefix="Ui"] - The string that should be used to prefix each component's name.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const registerDSL = (library: DSLLibrary, prefix: string = 'Ui'): void => {
  if (typeof library !== 'string') {
    console.error(`registerDSL(): Failed to register the DSL library! Expected [library] argument to be a type of [string], but got [${typeof library}]!`)
    return
  }

  if (
    !Object.prototype.hasOwnProperty.call(libraryRegisterFnRegistry, library) ||
    typeof libraryRegisterFnRegistry[library] !== 'function'
  ) {
    console.error(`registerDSL(): Failed to register the DSL library! There's no library associated with the [${library}] ID!`)
    return
  }

  libraryRegisterFnRegistry[library](prefix)
}
