// Copyright © 2021 Move Closer

/**
 * Injection key under which the DSL configuration should be registered within the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DSL_CONFIG_INJECTION_KEY = Symbol.for('$dsl')

/**
 * Config for uid package
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const uniqueIdConfig = {
  // {string} Property name of the component's unique identifier. Change this if 'vm.uid' conflicts
  // with another plugin or your own props.
  uidProperty: 'uuid',

  // {string} Prefix to use when generating HTML ids. Change this to make your ids more unique on a
  // page that already uses or could use a similar naming scheme.
  uidPrefix: 'uuid-'
}
