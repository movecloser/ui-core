"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixSizeClasses = exports.dashmixValidClasses = void 0;
const composables_1 = require("../../../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixValidClasses = {
    invalid: 'is-invalid',
    valid: 'is-valid'
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixSizeClasses = {
    [composables_1.SizeMap.Large]: 'form-control-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'form-control-sm',
    [composables_1.SizeMap.XLarge]: 'form-control-lg',
    [composables_1.SizeMap.XSmall]: 'form-control-sm'
};
