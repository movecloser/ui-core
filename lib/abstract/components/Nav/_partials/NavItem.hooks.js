"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavItem = exports.abstractNavItemProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../composables");
const NavItem_contracts_1 = require("./NavItem.contracts");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.abstractNavItemProps = Object.assign(Object.assign({}, composables_1.canBeDisabledProp), { 
    /**
     * Determines whether the item is the currently-active one.
     */
    active: {
        type: Boolean,
        required: false,
        default: true
    }, 
    /**
     * Unique ID of the given item. Needed to correctly switch between different items.
     */
    id: {
        type: String,
        required: true
    }, 
    /**
     * Item's label.
     */
    label: {
        type: String,
        required: true
    }, 
    /**
     * HTML tag that the item should be built on.
     */
    tag: {
        type: String,
        required: false,
        default: NavItem_contracts_1.AbstractNavItemTag.Button
    } });
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useNavItem = (props) => {
    /**
     * List of the CSS classes that should be applied to the inner HTML element.
     */
    const innerClassList = composition_api_1.computed(() => {
        const classList = ['nav-link'];
        if (props.active) {
            classList.push('active');
        }
        if (props.disabled) {
            classList.push('disabled');
        }
        return classList;
    });
    /**
     * Value for the `[id]` attribute of the inner HTML element.
     */
    const innerId = composition_api_1.computed(() => `${props.id}-tab`);
    return { innerClassList, innerId };
};
exports.useNavItem = useNavItem;
