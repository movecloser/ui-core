"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputControl = exports.getAbstractInputControlProps = exports.getAbstractBaseControlProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getAbstractBaseControlProps = () => ({
    ...composables_1.canBeDisabledProp,
    ...composables_1.hasSizeProp,
    ...composables_1.hasErrorsProp,
    /**
     * Value for the `[autocomplete]` attribute.
     */
    autocomplete: {
        type: String,
        required: false
    },
    /**
     * Determines whether the control should be automatically focused.
     */
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    label: {
        type: String,
        required: false
    },
    /**
     * Control's value, synced via PropSync.
     */
    model: { required: true },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    readonly: {
        type: Boolean,
        required: false,
        default: false
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    valid: {
        type: Boolean,
        required: false,
        default: null
    }
});
exports.getAbstractBaseControlProps = getAbstractBaseControlProps;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getAbstractInputControlProps = () => ({
    ...exports.getAbstractBaseControlProps(),
    /**
     * Value for the `[autocomplete]` attribute.
     */
    autocomplete: {
        type: String,
        required: false
    },
    /**
     * Determines whether the control should be automatically focused.
     */
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Control's value, synced via `v-model`.
     */
    model: { required: true }
});
exports.getAbstractInputControlProps = getAbstractInputControlProps;
/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param validClassMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useInputControl = (props, ctx, sizeRegistry, validClassMap = composables_1.defaultValidationClassMap) => {
    const { errors, valid, model, size } = composition_api_1.toRefs(props);
    const hasErrors = composables_1.useHasErrors(errors);
    const sizeClass = composables_1.useSizeClass(size, sizeRegistry);
    const isValid = composables_1.useIsValid(hasErrors, valid);
    const validationClass = composables_1.useValidMarkerClass(isValid, validClassMap);
    const value = composables_1.useSyncModel(model, ctx);
    return { hasErrors, sizeClass, validationClass, value };
};
exports.useInputControl = useInputControl;
