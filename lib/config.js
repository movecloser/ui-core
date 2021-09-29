"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSL_CONFIG_INJECTION_KEY = void 0;
/**
 * Injection key under which the DSL configuration should be registered within the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DSL_CONFIG_INJECTION_KEY = Symbol.for('$dsl');
