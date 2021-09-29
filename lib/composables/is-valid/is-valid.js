"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsValid = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @param hasErrors - Component's `has errors` reactive reference.
 * @param valid - Component's `valid` reactive reference.
 *
 * @author Olga Milczek <olgaMilczke@movecloser.pl>
 */
const useIsValid = (hasErrors, valid) => {
    /**
     * Determines whether the control has any validation errors.
     */
    return composition_api_1.computed(() => {
        if (hasErrors.value) {
            return false;
        }
        return valid.value;
    });
};
exports.useIsValid = useIsValid;
