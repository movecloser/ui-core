"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filter that strip all html tags.
 *
 * @param  {String} value
 * @return {String}
 */
function default_1(value) {
    const div = document.createElement('div');
    div.innerHTML = value;
    return (div.textContent || div.innerText || '');
}
exports.default = default_1;
