// Copyright © 2021 Move Closer

import { ValidationClassMap } from '../../../composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum DashmixSize {
  Large = 'lg',
  Normal = 'md',
  Small = 'sm',
}

/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export enum DashmixTheme {
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
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export const dashmixValidationClassRegistry: ValidationClassMap = {
  invalid: 'is-invalid',
  valid: 'is-valid'
}

/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export interface HasDashmixTheme {
  theme: DashmixTheme;
}
