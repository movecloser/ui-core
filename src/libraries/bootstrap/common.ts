// Copyright © 2021 Move Closer

import { ValidationClassMap } from '../../composables'

/**
 * @author Sebastian Dziechciarz <sebastian.dziechciarz@movecloser.pl
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapTheme {
  Default = 'default',
  Danger = 'danger',
  Dark = 'dark',
  Info = 'info',
  Light = 'light',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning'
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapValidationClassRegistry: ValidationClassMap = {
  invalid: 'is-invalid',
  valid: 'is-valid'
}
