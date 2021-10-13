"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixCheck = exports.dashmixCheckProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../../abstract");
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const Check_config_1 = require("./Check.config");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixCheckProps = {
    ...abstract_1.getAbstractCheckControlProps(),
    /**
     * Color mode.
     */
    theme: {
        type: String,
        required: false,
        default: contracts_1.DashmixTheme.Primary
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixCheck = (props, ctx) => {
    const { errors, valid, size, theme } = composition_api_1.toRefs(props);
    const checkControl = abstract_1.useCheckControl(props, ctx);
    const themeClass = composables_1.useThemeClass(theme, Check_config_1.dashmixCheckThemeRegistry);
    const hasErrors = composables_1.useHasErrors(errors);
    const isValid = composables_1.useIsValid(hasErrors, valid);
    const sizeClass = composables_1.useSizeClass(size, Check_config_1.dashmixCheckSizeRegistry);
    const validationClass = composables_1.useValidMarkerClass(isValid, contracts_1.dashmixValidationClassRegistry);
    const getFieldId = (index) => {
        return `${props.name}-${index}`;
    };
    return {
        ...checkControl,
        getFieldId,
        themeClass: themeClass.themeClass,
        sizeClass,
        validationClass
    };
};
exports.useDashmixCheck = useDashmixCheck;
