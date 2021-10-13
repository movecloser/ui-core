"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixAccordion = exports.dashmixAccordionProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Accordion_contracts_1 = require("./Accordion.contracts");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixAccordionProps = {
    defaultOpen: {
        type: Number,
        required: false
    },
    itemToClose: {
        type: Number,
        required: false
    },
    itemToOpen: {
        type: Number,
        required: false
    },
    itemToToggle: {
        type: Number,
        required: false
    },
    items: {
        type: Array,
        required: true
    },
    onlySingleOpen: {
        type: Boolean,
        required: false,
        default: false
    },
    type: {
        type: String,
        required: false,
        default: Accordion_contracts_1.DashmixAccordionType.Default
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixAccordion = (props, ctx) => {
    /**
     * Items that are currently open.
     */
    const openItems = composition_api_1.ref([]);
    /**
     * Determines whether the item of a passed-in index is currently open.
     *
     * @param itemIndex - Index of an item that is to be checked.
     *
     * @see DashmixAccordionProps.items
     */
    const isItemOpen = (itemIndex) => {
        return openItems.value.includes(itemIndex);
    };
    /**
     * Opens the item of a passed-in index.
     *
     * @param itemIndex - Index of an item that is to be opened.
     *
     * @see DashmixAccordionProps.items
     */
    const openItem = (itemIndex) => {
        openItems.value = [...openItems.value, itemIndex];
    };
    /**
     * Closes the item of a passed-in index.
     *
     * @param itemIndex - Index of an item that is to be closed.
     *
     * @see DashmixAccordionProps.items
     */
    const closeItem = (itemIndex) => {
        openItems.value = openItems.value.filter(item => item !== itemIndex);
    };
    /**
     * Toggles (opens/closes) the item of a passed-in index.
     *
     * @param itemIndex - Index of an item that is to be toggled.
     *
     * @see DashmixAccordionProps.items
     */
    const toggleItem = (itemIndex) => {
        isItemOpen(itemIndex) ? closeItem(itemIndex) : openItem(itemIndex);
    };
    /**
     * Closes all items **but** the one of a passed-in index.
     *
     * @param itemIndex - Index of an item that should stay untouched.
     *
     * @see DashmixAccordionProps.items
     * @see DashmixAccordionProps.onlySingleOpen
     */
    const closeOtherItems = (itemIndex) => {
        openItems.value.filter(item => item !== itemIndex).forEach(item => closeItem(item));
    };
    /**
     * Handles the `@click` event on the `<DashmixAccordionItem>`.
     *
     * @param itemIndex - Index of the item being clicked.
     *
     * @see DashmixAccordionProps.items
     */
    const onItemClick = (itemIndex) => {
        toggleItem(itemIndex);
        ctx.emit('toggled', { itemIndex });
        if (props.onlySingleOpen)
            closeOtherItems(itemIndex);
    };
    /**
     * Send update event to parent.
     *
     * @param from - ID of the changed item.
     * @param payload - Event data.
     */
    const onItemChanged = (from, payload) => {
        ctx.emit('changed', {
            item: from,
            payload
        });
    };
    composition_api_1.onMounted(() => {
        if (typeof props.defaultOpen === 'number') {
            openItem(props.defaultOpen);
        }
    });
    const { itemToClose, itemToOpen, itemToToggle } = composition_api_1.toRefs(props);
    if (typeof itemToClose !== 'undefined') {
        composition_api_1.watch(itemToClose, (newValue) => {
            if (typeof newValue === 'number' && newValue >= 0) {
                closeItem(newValue);
            }
        });
    }
    if (typeof itemToOpen !== 'undefined') {
        composition_api_1.watch(itemToOpen, (newValue) => {
            if (typeof newValue === 'number' && newValue >= 0) {
                openItem(newValue);
            }
        });
    }
    if (typeof itemToToggle !== 'undefined') {
        composition_api_1.watch(itemToToggle, (newValue) => {
            if (typeof newValue === 'number' && newValue >= 0) {
                toggleItem(newValue);
            }
        });
    }
    return { isItemOpen, onItemClick, onItemChanged };
};
exports.useDashmixAccordion = useDashmixAccordion;
