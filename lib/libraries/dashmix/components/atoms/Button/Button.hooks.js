"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixButton = exports.dashmixButtonProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const Button_contract_1 = require("./Button.contract");
const Button_config_1 = require("./Button.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixButtonProps = {
    ...composables_1.canBeDisabledProp,
    ...composables_1.doubleClickProps,
    ...composables_1.hasSizeProp,
    /**
     * Show label on small screen
     */
    alwaysWithLabel: {
        type: Boolean,
        required: false,
        default: true
    },
    /**
     * Text shown to the User when he clicks the button for the 1st time.
     * In use only when the `doubleClick` prop is set to `true`.
     */
    confirmationText: {
        type: String,
        required: false,
        default: 'Czy na pewno?'
    },
    /**
     * Button's icon.
     */
    icon: {
        type: String,
        required: false
    },
    /**
     * Button's label.
     */
    label: {
        type: String,
        required: false,
        default: ''
    },
    /**
     * Determines whether the component should display a loading indicator.
     */
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Button's theme (style variant).
     */
    theme: {
        type: String,
        required: false,
        default: contracts_1.DashmixTheme.Primary
    },
    /**
     * Button's variant (style variant).
     */
    variant: {
        type: String,
        required: false,
        default: Button_contract_1.DashmixButtonVariantMap.Default
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDashmixButton(props, ctx) {
    const { size, theme, variant } = composition_api_1.toRefs(props);
    const emitClick = (e) => {
        ctx.emit('click', e);
    };
    const { handleClick, isPendingClick } = composables_1.useDoubleClick(emitClick, props.doubleClick, props.clickPeriod);
    const sizeClass = composables_1.useSizeClass(size, Button_config_1.dashmixButtonSizeRegistry);
    const message = composition_api_1.computed(() => isPendingClick.value ? props.confirmationText
        : props.label);
    const themePart = composables_1.useThemeClass(theme, Button_config_1.dashmixButtonThemeClassRegistry);
    const variantPart = composables_1.useThemeClass(variant, Button_config_1.dashmixButtonVariantClassRegistry);
    const styleClass = composition_api_1.computed(() => variant.value === Button_contract_1.DashmixButtonVariantMap.None
        ? `btn${variantPart.themeClass.value}`
        : `btn${variantPart.themeClass.value}${themePart.themeClass.value}`);
    return { handleClick, isPendingClick, message, sizeClass, styleClass };
}
exports.useDashmixButton = useDashmixButton;
