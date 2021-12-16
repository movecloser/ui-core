"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixDropdownSizeClassRegistry = exports.dashmixDropdownPopperPositionRegistry = exports.dashmixDropdownPositionClassRegistry = exports.dashmixDropdownItemClassRegistry = exports.dashmixDropdownAlignClassRegistry = void 0;
const composables_1 = require("../../../../../composables");
const Dropdown_1 = require("../../../../../abstract/components/Dropdown");
const contracts_1 = require("../../../contracts");
const Dropdown_contracts_1 = require("./Dropdown.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownAlignClassRegistry = {
    [Dropdown_1.DropdownAlignmentMap.Left]: '',
    [Dropdown_1.DropdownAlignmentMap.Right]: 'dropdown-menu-right'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownItemClassRegistry = {
    [contracts_1.DashmixTheme.Default]: '',
    [contracts_1.DashmixTheme.Danger]: 'text-danger',
    [contracts_1.DashmixTheme.Dark]: 'text-dark',
    [contracts_1.DashmixTheme.Info]: 'text-info',
    [contracts_1.DashmixTheme.Light]: 'text-light',
    [contracts_1.DashmixTheme.Primary]: 'text-primary',
    [contracts_1.DashmixTheme.Success]: 'text-success',
    [contracts_1.DashmixTheme.Warning]: 'text-warning'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownPositionClassRegistry = {
    [Dropdown_1.DropdownPositionMap.Down]: '',
    [Dropdown_1.DropdownPositionMap.Left]: 'dropleft push',
    [Dropdown_1.DropdownPositionMap.Right]: 'dropright push',
    [Dropdown_1.DropdownPositionMap.Up]: 'dropup'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownPopperPositionRegistry = {
    [Dropdown_1.DropdownPositionMap.Down]: Dropdown_contracts_1.PopperPositions.BottomEnd,
    [Dropdown_1.DropdownPositionMap.Left]: Dropdown_contracts_1.PopperPositions.Left,
    [Dropdown_1.DropdownPositionMap.Right]: Dropdown_contracts_1.PopperPositions.Right,
    [Dropdown_1.DropdownPositionMap.Up]: Dropdown_contracts_1.PopperPositions.LeftEnd
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownSizeClassRegistry = {
    [composables_1.SizeMap.Large]: 'btn-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'btn-sm',
    [composables_1.SizeMap.XLarge]: 'btn-lg',
    [composables_1.SizeMap.XSmall]: 'btn-sm'
};
