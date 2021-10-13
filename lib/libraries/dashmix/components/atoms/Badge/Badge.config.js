"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixBadgeVariantRegistry = exports.dashmixBadgeThemeRegistry = exports.dashmixBadgeShapeRegistry = void 0;
const contracts_1 = require("../../../contracts");
const Badge_contracts_1 = require("./Badge.contracts");
exports.dashmixBadgeShapeRegistry = {
    [Badge_contracts_1.DashmixBadgeShape.Pill]: 'badge-pill',
    [Badge_contracts_1.DashmixBadgeShape.Rectangle]: ''
};
exports.dashmixBadgeThemeRegistry = {
    [contracts_1.DashmixTheme.Default]: '-primary',
    [contracts_1.DashmixTheme.Danger]: '-danger',
    [contracts_1.DashmixTheme.Dark]: '-dark',
    [contracts_1.DashmixTheme.Info]: '-info',
    [contracts_1.DashmixTheme.Light]: '-light',
    [contracts_1.DashmixTheme.Primary]: '-primary',
    [contracts_1.DashmixTheme.Success]: '-success',
    [contracts_1.DashmixTheme.Warning]: '-warning'
};
exports.dashmixBadgeVariantRegistry = {
    [Badge_contracts_1.DashmixBadgeVariantMap.Alt]: '-alt',
    [Badge_contracts_1.DashmixBadgeVariantMap.Default]: ''
};
