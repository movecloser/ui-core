"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixSwitchSize = exports.dashmixSwitchTheme = void 0;
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.dashmixSwitchTheme = {
    [contracts_1.DashmixTheme.Danger]: 'custom-control-danger',
    [contracts_1.DashmixTheme.Info]: 'custom-control-info',
    [contracts_1.DashmixTheme.Primary]: 'custom-control-primary',
    [contracts_1.DashmixTheme.Success]: 'custom-control-success',
    [contracts_1.DashmixTheme.Warning]: 'custom-control-warning',
    [contracts_1.DashmixTheme.Dark]: 'custom-control-dark',
    [contracts_1.DashmixTheme.Light]: 'custom-control-light',
    [contracts_1.DashmixTheme.Default]: 'custom-control-primary'
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.dashmixSwitchSize = {
    [composables_1.SizeMap.Large]: 'custom-control-lg',
    [composables_1.SizeMap.Small]: '',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.XLarge]: 'custom-control-lg',
    [composables_1.SizeMap.XSmall]: ''
};
