"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixAccordionItem = exports.dashmixAccordionItemProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Accordion_contracts_1 = require("../Accordion.contracts");
const Accordion_config_1 = require("../Accordion.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixAccordionItemProps = {
    /**
     * Determines whether the item should be opened.
     */
    isOpen: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Item's label.
     */
    label: {
        type: [String, Function, Object],
        required: false,
        default: ''
    },
    /**
     * One of the predefined style presets.
     * @see DashmixAccordionType
     */
    type: {
        type: String,
        required: false,
        default: Accordion_contracts_1.DashmixAccordionType.Default
    },
    /**
     * Properties of label component
     */
    labelProps: {
        type: Object,
        required: false,
        default() {
            return {};
        }
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixAccordionItem = (props, ctx) => {
    // Extract the `type` prop.
    const type = composition_api_1.toRef(props, 'type');
    const isOpen = composition_api_1.toRef(props, 'isOpen');
    const isVisible = composition_api_1.ref(false);
    // Extract the `emit()` function.
    const { emit } = ctx;
    const isSimpleLabel = composition_api_1.computed(() => {
        return typeof props.label === 'string';
    });
    /**
     * Handles the @click event on the root HTML element.
     */
    const onClick = () => {
        emit('click');
    };
    /**
     * The predefined style preset.
     * @see DashmixAccordionStylePreset
     */
    const stylePreset = composition_api_1.computed(() => {
        if (!Object.values(Accordion_contracts_1.DashmixAccordionType).includes(type.value)) {
            return Accordion_config_1.dashmixAccordionStylePresets.default;
        }
        return Accordion_config_1.dashmixAccordionStylePresets[type.value];
    });
    composition_api_1.watch(isOpen, (isOpen) => {
        setTimeout(() => {
            isVisible.value = isOpen;
        }, 500);
    });
    return { isSimpleLabel, onClick, stylePreset, isVisible };
};
exports.useDashmixAccordionItem = useDashmixAccordionItem;
