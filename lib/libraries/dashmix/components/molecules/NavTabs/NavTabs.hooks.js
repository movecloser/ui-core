"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixNavTabs = exports.dashmixNavTabsProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixNavTabsProps = {
    ...composables_1.canBeDisabledProp,
    /**
     * The ID of the currently-active tab.
     */
    active: {
        type: String,
        required: true
    },
    /**
     * List of tabs to render.
     */
    items: {
        type: Array,
        required: true
    },
    /**
     * Determine if should use justified tabs.
     */
    justify: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Determine if tabs has background.
     */
    hasDefaultBackground: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Determint if tabs are vertically scrollable.
     */
    scrollable: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixNavTabs = (props, ctx) => {
    // Extract the `emit()` function.
    const { emit } = ctx;
    /**
     * Currently-active tab.
     */
    const activeTab = composition_api_1.computed({
        get() {
            return props.active;
        },
        set(value) {
            emit('update:active', value);
        }
    });
    /**
     * Activates the tab of a passed-in ID.
     * @param id - The ID of the tab that is to be set as 'active'.
     */
    const activateTab = (id) => {
        if (!props.disabled) {
            activeTab.value = id;
        }
    };
    /**
     * Checks if the tab of a passed-in ID is the currently-active one.
     * @param id - The ID of the tab that is to be checked.
     */
    const isTabActive = (id) => {
        return activeTab.value === id;
    };
    return { activeTab, activateTab, isTabActive };
};
exports.useDashmixNavTabs = useDashmixNavTabs;
