"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropdown = exports.dropdownProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Dropdown_contracts_1 = require("./Dropdown.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dropdownProps = {
    align: {
        type: String,
        required: false,
        default: () => Dropdown_contracts_1.DropdownAlignmentMap.Left
    },
    icon: {
        type: String,
        required: false,
        default: null
    },
    items: {
        type: Array,
        required: false,
        default: () => []
    },
    label: {
        type: String,
        required: false,
        default: ''
    },
    openOnMount: {
        type: Boolean,
        required: false,
        default: false
    },
    position: {
        type: String,
        required: false,
        default: () => Dropdown_contracts_1.DropdownPositionMap.Down
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDropdown(props, ctx) {
    const isOpen = composition_api_1.ref(props.openOnMount || false);
    const hasCustomTrigger = composition_api_1.computed(() => props.trigger !== null);
    const close = () => { isOpen.value = false; };
    const open = () => { isOpen.value = true; };
    const toggle = () => { isOpen.value ? close() : open(); };
    return { close, hasCustomTrigger, isOpen, open, toggle };
}
exports.useDropdown = useDropdown;
