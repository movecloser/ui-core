"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalSizeRegistry = void 0;
const composables_1 = require("../../../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.modalSizeRegistry = {
    [composables_1.SizeMap.Large]: 'modal-lg',
    [composables_1.SizeMap.Medium]: '',
    [composables_1.SizeMap.Small]: 'modal-sm',
    [composables_1.SizeMap.XLarge]: 'modal-xl',
    [composables_1.SizeMap.XSmall]: 'modal-sm'
};
