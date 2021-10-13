"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Uppercases the first letter of the input string.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function default_1(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}
exports.default = default_1;
