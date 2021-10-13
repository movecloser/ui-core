"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatarSizeRegistry = void 0;
const composables_1 = require("../../../../../composables");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.avatarSizeRegistry = {
    [composables_1.SizeMap.Large]: 'img-avatar48',
    [composables_1.SizeMap.Medium]: 'img-avatar32',
    [composables_1.SizeMap.Small]: 'img-avatar28',
    [composables_1.SizeMap.XLarge]: 'img-avatar64',
    [composables_1.SizeMap.XSmall]: 'img-avatar28'
};
