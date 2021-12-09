"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixSelect = exports.dashmixSelectProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const core_1 = require("@popperjs/core");
const composables_1 = require("../../../../../composables");
const Select_config_1 = require("./Select.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixSelectProps = {
    ...composables_1.hasSizeProp,
    autocomplete: {
        type: String,
        default: 'off'
    },
    clearable: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    filterBy: {
        type: Function,
        required: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    model: {
        required: true
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false
    },
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    searchable: {
        type: Boolean,
        required: false,
        default: false
    },
    taggable: {
        type: Boolean,
        required: false,
        default: false
    },
    withDynamicPosition: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixSelect = (props, ctx) => {
    // Extract the `emit()` function.
    const { emit } = ctx;
    // Variable to storage taggable options
    let customOptions = [];
    const sizeClass = composables_1.useSizeClass(composition_api_1.toRef(props, 'size'), Select_config_1.sizeRegistry);
    /**
     * Getter and setter for use in `v-model` binding of the `<VSelect>`.
     */
    const _model = composition_api_1.computed({
        get() {
            if (props.multiple) {
                const filteredOptions = props.options.filter(_option => Array.isArray(props.model) && props.model.includes(_option.value));
                if (props.taggable && Array.isArray(props.model)) {
                    // Add tagged options to _model
                    return [...filteredOptions, ...customOptions];
                }
                return filteredOptions;
            }
            return props.options.find(_option => _option.value === props.model);
        },
        set(value) {
            if (typeof value === 'undefined') {
                emit('update:model', value);
            }
            else if (Array.isArray(value)) {
                // Add selected tagged options to customOptions
                customOptions = value.filter(v => !v.value);
                emit('update:model', value.map(o => o.value ? o.value : o.label));
            }
            else {
                emit('update:model', value.value);
            }
        }
    });
    // Method from VSelect documentation
    const withPopper = (dropdownList, component, { width }) => {
        if (!props.withDynamicPosition) {
            return;
        }
        /**
         * We need to explicitly define the dropdown width since
         * it is usually inherited from the parent with CSS.
         *
         */
        dropdownList.style.width = width;
        /**
        * Here we position the dropdownList relative to the $refs.toggle Element.
        *
        * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
        * the dropdownList overlap by 1 pixel.
        *
        * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
        * wrapper so that we can set some styles for when the dropdown is placed
        * above.
        */
        if (!component.$refs || !component.$refs.toggle) {
            return;
        }
        const popper = core_1.createPopper(component.$refs.toggle, dropdownList, {
            placement: 'bottom',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, -1]
                    }
                },
                {
                    name: 'toggleClass',
                    enabled: true,
                    phase: 'write',
                    fn({ state }) {
                        component.$el.classList.toggle('drop-up', state.placement === 'top');
                    }
                }
            ]
        });
        /**
         * To prevent memory leaks Popper needs to be destroyed.
         * If you return function, it will be called just before dropdown is removed from DOM.
         */
        return () => popper.destroy();
    };
    return { _model, sizeClass, withPopper };
};
exports.useDashmixSelect = useDashmixSelect;
