"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixDropdown = exports.dashmixDropdownProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Dropdown_1 = require("../../../../../abstract/components/Dropdown");
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const Button_1 = require("../../atoms/Button");
const Dropdown_config_1 = require("./Dropdown.config");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixDropdownProps = {
    ...Dropdown_1.dropdownProps,
    triggerSize: composables_1.getSizePropDefinition(),
    triggerTheme: {
        type: String,
        required: false,
        default: () => contracts_1.DashmixTheme.Primary
    },
    triggerVariant: {
        type: String,
        required: false,
        default: () => Button_1.DashmixButtonVariantMap.Default
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixDropdown = (props, ctx) => {
    const { align, position } = composition_api_1.toRefs(props);
    const { close, isOpen, open, toggle } = Dropdown_1.useDropdown(props, ctx);
    const dropdownClass = composables_1.useThemeClass(position, Dropdown_config_1.dashmixDropdownPositionClassRegistry);
    const dropdownMenuClass = composables_1.useThemeClass(align, Dropdown_config_1.dashmixDropdownAlignClassRegistry);
    return {
        close,
        dropdownClass: dropdownClass.themeClass,
        dropdownMenuClass: dropdownMenuClass.themeClass,
        isOpen,
        open,
        toggle
    };
};
exports.useDashmixDropdown = useDashmixDropdown;
