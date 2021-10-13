"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Focus directive for fields
 */
exports.default = {
    bind(el, binding) {
        if (binding.value === true) {
            setTimeout(() => el.focus(), 0);
        }
    },
    update(el, binding) {
        if (binding.value === true) {
            setTimeout(() => el.focus(), 0);
        }
    }
};
