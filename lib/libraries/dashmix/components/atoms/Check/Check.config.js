"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixCheckThemeRegistry = exports.dashmixCheckSizeRegistry = void 0;
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
exports.dashmixCheckSizeRegistry = {
    [composables_1.SizeMap.Large]: 'custom-control-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'custom-control-sm',
    [composables_1.SizeMap.XLarge]: 'custom-control-ls',
    [composables_1.SizeMap.XSmall]: 'custom-control-sm'
};
exports.dashmixCheckThemeRegistry = {
    [contracts_1.DashmixTheme.Default]: 'custom-control-primary',
    [contracts_1.DashmixTheme.Danger]: 'custom-control-danger',
    [contracts_1.DashmixTheme.Dark]: 'custom-control-dark',
    [contracts_1.DashmixTheme.Info]: 'custom-control-info',
    [contracts_1.DashmixTheme.Light]: 'custom-control-light',
    [contracts_1.DashmixTheme.Primary]: 'custom-control-primary',
    [contracts_1.DashmixTheme.Success]: 'custom-control-success',
    [contracts_1.DashmixTheme.Warning]: 'custom-control-warning'
};
