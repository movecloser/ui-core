// Copyright © 2021 Move Closer

import { registerBootstrapDSL } from './libraries/bootstrap'

/**
 * Available DSL components libraries.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum DSLLibrary {
  Bootstrap = 'bootstrap'
}

/**
 * Registry that binds the DSLLibrary with the applicable registering function.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const libraryRegisterFnRegistry: Record<DSLLibrary, (prefix: string) => void> = {
  [DSLLibrary.Bootstrap]: registerBootstrapDSL
}
