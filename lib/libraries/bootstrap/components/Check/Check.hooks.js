"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapCheck = exports.bootstrapCheckProps = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../composables");
const abstract_1 = require("../../../../abstract");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.bootstrapCheckProps = Object.assign(Object.assign({}, abstract_1.getAbstractCheckListProps()), { stacked: {
        type: Boolean,
        required: false,
        default: false
    } });
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useBootstrapCheck = (props, ctx, validClassMap = composables_1.defaultValidationClassMap) => {
    const { errors, multiple, valid } = composition_api_1.toRefs(props);
    const { checked, checkType } = abstract_1.useCheckControl(props, ctx);
    const hasErrors = composables_1.useHasErrors(errors);
    const isValid = composables_1.useIsValid(hasErrors, valid);
    const validationClass = composables_1.useValidMarkerClass(isValid, validClassMap);
    const component = composition_api_1.computed(() => multiple.value ? bootstrap_vue_1.BFormCheckboxGroup
        : bootstrap_vue_1.BFormRadioGroup);
    return { checked, checkType, component, hasErrors, validationClass };
};
exports.useBootstrapCheck = useBootstrapCheck;
