// Copyright © 2021 Move Closer

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapSize {
  Large = 'lg',
  Normal = 'md',
  Small = 'sm',
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapTheme {
  Danger = 'danger',
  Dark = 'dark',
  Info = 'info',
  Light = 'light',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface HasBootstrapTheme {
  theme: BootstrapTheme;
}
