"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidMarkerClass = void 0;
const composition_api_1 = require("@vue/composition-api");
const valid_marker_contracts_1 = require("./valid-marker.contracts");
/**
 * @param isValid - Component's `isValid` reactive reference.
 * @param classMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useValidMarkerClass = (isValid, classMap = valid_marker_contracts_1.defaultValidationClassMap) => {
    /**
     * The CSS class that handles the valid/invalid states of the (form)control.
     */
    return composition_api_1.computed(() => {
        return isValid.value ? classMap.valid : (isValid.value !== null ? classMap.invalid : '');
    });
};
exports.useValidMarkerClass = useValidMarkerClass;
