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
     * @inheritDoc
     */
    autocomplete: {
        type: String,
        required: false
    },
    /**
     * @inheritDoc
     */
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * @inheritDoc
     */
    label: {
        type: String,
        required: false
    },
    /**
     * @inheritDoc
     */
    model: { required: true },
    /**
     * @inheritDoc
     */
    name: {
        type: String,
        required: true
    },
    /**
     * @inheritDoc
     */
    placeholder: {
        type: String,
        required: false
    },
    /**
     * @inheritDoc
     */
    readonly: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * @inheritDoc
     */
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * @inheritDoc
     */
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
     * @inheritDoc
     */
    autocomplete: {
        type: String,
        required: false
    },
    /**
     * @inheritDoc
     */
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * @inheritDoc
     */
    castAsNumber: {
        type: Boolean,
        required: false,
        default: false
    }
});
exports.getAbstractInputControlProps = getAbstractInputControlProps;
/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param [validClassMap=defaultValidationClassMap] - TODO: Documentation.
 * @param [castAsNumber=false] - Determines whether the User's input should be automatically
 *   typecast as a `Number` (see: https://vuejs.org/v2/guide/forms.html#number).
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useInputControl = (props, ctx, sizeRegistry, validClassMap = composables_1.defaultValidationClassMap, castAsNumber = false) => {
    const { errors, model, size, valid } = composition_api_1.toRefs(props);
    const hasErrors = composables_1.useHasErrors(errors);
    const sizeClass = composables_1.useSizeClass(size, sizeRegistry);
    const isValid = composables_1.useIsValid(hasErrors, valid);
    const validationClass = composables_1.useValidMarkerClass(isValid, validClassMap);
    const value = composables_1.useSyncModel(model, ctx, 'model', castAsNumber);
    return { hasErrors, sizeClass, validationClass, value };
};
exports.useInputControl = useInputControl;
