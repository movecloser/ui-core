"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixDropdownItem = void 0;
const composition_api_1 = require("@vue/composition-api");
const Dropdown_1 = require("../../../../../../abstract/components/Dropdown");
const composables_1 = require("../../../../../../composables");
const contracts_1 = require("../../../../contracts");
const Dropdown_config_1 = require("../Dropdown.config");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDashmixDropdownItem(props, ctx) {
    const theme = composition_api_1.ref(props.item.theme || contracts_1.DashmixTheme.Default);
    const itemClass = composables_1.useThemeClass(theme, Dropdown_config_1.dashmixDropdownItemClassRegistry);
    return { ...Dropdown_1.useDropdownItem(props, ctx), itemClass };
}
exports.useDashmixDropdownItem = useDashmixDropdownItem;
