"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueIdConfig = exports.DSL_CONFIG_INJECTION_KEY = void 0;
/**
 * Injection key under which the DSL configuration should be registered within the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DSL_CONFIG_INJECTION_KEY = Symbol.for('$dsl');
/**
 * Config for uid package
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.uniqueIdConfig = {
    // {string} Property name of the component's unique identifier. Change this if 'vm.uid' conflicts
    // with another plugin or your own props.
    uidProperty: 'uuid',
    // {string} Prefix to use when generating HTML ids. Change this to make your ids more unique on a
    // page that already uses or could use a similar naming scheme.
    uidPrefix: 'uuid-'
};
