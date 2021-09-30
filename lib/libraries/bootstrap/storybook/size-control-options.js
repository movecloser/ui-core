"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSizeControlOptions = void 0;
const composables_1 = require("../../../composables");
/**
 * Filters the `SizeMap` enum end returns only those key-value pairs
 * that are defined in the passed-in `SizeRegistry`.
 *
 * @param sizeRegistry - Registry binding the element's size with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const getSizeControlOptions = (sizeRegistry) => {
    return Object.entries(composables_1.SizeMap)
        .filter(([key, value]) => typeof sizeRegistry[value] === 'string')
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
exports.getSizeControlOptions = getSizeControlOptions;
