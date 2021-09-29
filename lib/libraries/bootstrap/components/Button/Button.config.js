"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapButtonThemeClassRegistry = exports.BootstrapButtonSizeMapClassRegistry = void 0;
const composables_1 = require("../../../../composables");
const contracts_1 = require("../../contracts");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapButtonSizeMapClassRegistry = {
    [composables_1.SizeMap.Large]: 'btn-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'btn-sm'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapButtonThemeClassRegistry = {
    [contracts_1.BootstrapTheme.Primary]: 'btn-primary',
    [contracts_1.BootstrapTheme.Secondary]: 'btn-secondary'
};
