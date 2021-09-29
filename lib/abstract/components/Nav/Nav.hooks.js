"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNav = exports.abstractNavProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.abstractNavProps = {
    /**
     * The ID of the currently-active item.
     */
    activeItem: {
        type: String,
        required: true
    },
    /**
     * Items to render.
     */
    items: {
        type: Array,
        required: true
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useNav = (props, ctx) => {
    // Extract the `emit()` function.
    const { emit } = ctx;
    /**
     * The ID of the currently-active tab.
     */
    const _activeItem = composition_api_1.computed({
        get() {
            return props.activeItem;
        },
        set(value) {
            emit('update:activeItem', value);
        }
    });
    /**
     * Activates the item of a passed-in ID.
     *
     * @param id - The ID of the item that is to be set as 'active'.
     */
    const activateItem = (id) => {
        _activeItem.value = id;
    };
    /**
     * Checks if the item of a passed-in ID is the currently-active one.
     *
     * @param id - The ID of the item that is to be checked.
     */
    const isItemActive = (id) => {
        return _activeItem.value === id;
    };
    return { _activeItem, activateItem, isItemActive };
};
exports.useNav = useNav;
