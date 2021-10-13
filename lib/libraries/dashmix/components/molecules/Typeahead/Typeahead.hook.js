"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypeahead = exports.typeaheadProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const lodash_1 = require("lodash");
const contracts_1 = require("../../../contracts");
const atoms_1 = require("../../atoms");
const composables_1 = require("../../../../../composables");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.typeaheadProps = {
    autofocus: {
        type: Boolean,
        required: false
    },
    badgeMaxLength: {
        type: Number,
        required: false,
        default: 30
    },
    badgeTheme: {
        type: String,
        required: false,
        default: contracts_1.DashmixTheme.Light
    },
    badgeVariant: {
        type: String,
        required: false,
        default: atoms_1.DashmixBadgeVariantMap.Default
    },
    clearable: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    error: {
        type: Boolean,
        required: false,
        default: false
    },
    hints: {
        type: Array,
        required: true
    },
    isMulti: {
        type: Boolean,
        required: false,
        default: true
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    noResults: {
        type: String,
        required: false,
        default: 'atoms.noResults'
    },
    newResult: {
        type: String,
        required: false,
        default: 'atoms.add'
    },
    placeholder: {
        type: String,
        required: false,
        default: 'atoms.typeaheadPlaceholder'
    },
    taggable: {
        type: Boolean,
        required: false,
        default: true
    },
    size: {
        type: String,
        required: false,
        default: () => composables_1.SizeMap.Medium
    },
    selected: {
        type: Array,
        required: false,
        default: () => []
    },
    showSelection: {
        type: Boolean,
        required: false,
        default: true
    },
    useDebounce: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useTypeahead = (props, ctx) => {
    const { emit } = ctx;
    const dropdown = composition_api_1.ref(null);
    const input = composition_api_1.ref(null);
    const value = composition_api_1.ref('');
    function hintSelected(hint) {
        const onSearchCallback = () => {
            emit('selected', hint);
        };
        setTimeout(() => {
            value.value = '';
        }, 0);
        if (hint.value && props.selected.map(s => s.value).includes(hint.value)) {
            return;
        }
        if (props.useDebounce) {
            lodash_1.debounce(onSearchCallback, 400);
        }
        else {
            onSearchCallback();
        }
    }
    const dropdownItems = composition_api_1.computed(() => {
        const tempHints = props.hints.map(hint => {
            return {
                type: 'item',
                label: hint.label,
                onClick: () => {
                    hintSelected(hint);
                }
            };
        });
        if (value.value.length > 2 && props.taggable) {
            tempHints.unshift({
                type: 'divider'
            });
            tempHints.unshift({
                type: 'item',
                label: `${props.newResult}: ${value.value}`,
                onClick: () => {
                    hintSelected({ label: value.value, value: '', new: true });
                }
            });
        }
        // If there are no hints and no prepend element is defined, display noResults element
        if (props.hints.length < 1 && props.noResults) {
            tempHints.push({
                type: 'item',
                label: `${props.noResults}`
            });
        }
        return tempHints;
    });
    const enterPressed = (e) => {
        if (e.code === 'Enter' && value.value.length > 2) {
            const hint = { label: value.value, value: '' };
            emit('selected', hint);
            value.value = '';
        }
    };
    const hintSearch = lodash_1.debounce((newValue) => {
        hintSearch.cancel();
        if (newValue.length > 2) {
            emit('searched', newValue);
        }
    }, 200);
    const onClear = () => {
        value.value = '';
    };
    const onInputChange = (newValue) => {
        value.value = newValue;
    };
    composition_api_1.watch(value, (newValue) => {
        if (!newValue) {
            return emit('cleared');
        }
        hintSearch(newValue);
    });
    composition_api_1.onMounted(() => {
        window.addEventListener('keyup', enterPressed);
    });
    composition_api_1.onUnmounted(() => {
        window.removeEventListener('keyup', enterPressed);
    });
    return { dropdown, dropdownItems, onClear, onInputChange, input, value };
};
exports.useTypeahead = useTypeahead;
