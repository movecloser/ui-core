"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectControl = exports.getAbstractSelectControlProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
const InputControl_1 = require("../InputControl");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getAbstractSelectControlProps = () => (Object.assign(Object.assign({}, InputControl_1.getAbstractBaseControlProps()), { options: {
        type: Array,
        required: true
    } }));
exports.getAbstractSelectControlProps = getAbstractSelectControlProps;
/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param validClassMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useSelectControl = (props, ctx, sizeRegistry, validClassMap = composables_1.defaultValidationClassMap) => {
    const { errors, valid, model, size } = composition_api_1.toRefs(props);
    const hasErrors = composables_1.useHasErrors(errors);
    const sizeClass = composables_1.useSizeClass(size, sizeRegistry);
    const isValid = composables_1.useIsValid(hasErrors, valid);
    const validationClass = composables_1.useValidMarkerClass(isValid, validClassMap);
    const value = composables_1.useSyncModel(model, ctx);
    return { hasErrors, sizeClass, validationClass, value };
};
exports.useSelectControl = useSelectControl;
