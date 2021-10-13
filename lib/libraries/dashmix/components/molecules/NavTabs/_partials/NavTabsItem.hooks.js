"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixNavTabsItem = exports.dashmixNavTabsItemProps = void 0;
const composables_1 = require("../../../../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixNavTabsItemProps = {
    ...composables_1.canBeDisabledProp,
    /**
     * Determines whether the tab is the currently active one.
     */
    active: {
        type: Boolean,
        required: false,
        default: true
    },
    /**
     * Tab's label.
     */
    label: {
        type: [String, Function],
        required: true
    },
    /**
     * Index of tab.
     */
    index: {
        type: Number,
        required: true
    },
    /**
     * Properties of label component
     */
    props: {
        type: Object,
        required: false,
        default() {
            return {};
        }
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixNavTabsItem = (props, ctx) => {
    /**
     * Handles the @click event on the root `<li>` element.
     */
    const onClick = () => {
        if (!props.disabled) {
            ctx.emit('click');
        }
    };
    return { isSimpleTab: (typeof props.label === 'string'), onClick };
};
exports.useDashmixNavTabsItem = useDashmixNavTabsItem;
