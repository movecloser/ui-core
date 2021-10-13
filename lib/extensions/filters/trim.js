"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filter that trim string to given length.
 *
 * @param  {String} value
 * @param length
 * @param add
 * @return {String}
 */
function default_1(value, length = 25, add = '...') {
    return (value.length > length) ? `${value.slice(0, length)}${add}` : value;
}
exports.default = default_1;
