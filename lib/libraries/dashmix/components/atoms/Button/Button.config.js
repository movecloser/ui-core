"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixButtonVariantClassRegistry = exports.dashmixButtonThemeClassRegistry = exports.dashmixButtonSizeRegistry = void 0;
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const Button_contract_1 = require("./Button.contract");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixButtonSizeRegistry = {
    [composables_1.SizeMap.Large]: 'btn-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'btn-sm',
    [composables_1.SizeMap.XLarge]: 'btn-lg',
    [composables_1.SizeMap.XSmall]: 'btn-sm'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixButtonThemeClassRegistry = {
    [contracts_1.DashmixTheme.Default]: '-primary',
    [contracts_1.DashmixTheme.Danger]: '-danger',
    [contracts_1.DashmixTheme.Dark]: '-dark',
    [contracts_1.DashmixTheme.Info]: '-info',
    [contracts_1.DashmixTheme.Light]: '-light',
    [contracts_1.DashmixTheme.Primary]: '-primary',
    [contracts_1.DashmixTheme.Success]: '-success',
    [contracts_1.DashmixTheme.Warning]: '-warning'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixButtonVariantClassRegistry = {
    [Button_contract_1.DashmixButtonVariantMap.Alt]: '-alt',
    [Button_contract_1.DashmixButtonVariantMap.Default]: '',
    [Button_contract_1.DashmixButtonVariantMap.Hero]: '-hero',
    [Button_contract_1.DashmixButtonVariantMap.Icon]: '-icon',
    [Button_contract_1.DashmixButtonVariantMap.Outline]: '-outline',
    [Button_contract_1.DashmixButtonVariantMap.None]: '-none'
};
