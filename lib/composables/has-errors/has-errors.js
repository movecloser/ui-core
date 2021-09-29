"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasErrors = exports.hasErrorsProp = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * Props partial.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.hasErrorsProp = {
    errors: {
        type: Array,
        required: false,
        default: () => []
    }
};
/**
 * @param errors - Component's `errors` reactive reference.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useHasErrors = (errors) => {
    /**
     * Determines whether the control has any validation errors.
     */
    return composition_api_1.computed(() => Array.isArray(errors.value) && errors.value.length > 0);
};
exports.useHasErrors = useHasErrors;
