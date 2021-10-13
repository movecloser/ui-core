"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilterBadge = exports.filterBadgeProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Filters_contracts_1 = require("../Filters.contracts");
const Filters_helpers_1 = require("../Filters.helpers");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.filterBadgeProps = {
    config: {
        type: Object,
        required: true
    },
    container: {
        type: Object,
        required: false
    },
    dictionaries: {
        type: Object,
        required: true
    },
    isNew: {
        type: Boolean,
        required: false,
        default: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    field: {
        type: String,
        required: true
    },
    value: {
        type: [Object, Array, String, Boolean, Number],
        required: true
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
function useFilterBadge(props, ctx) {
    const { config, field, value } = props;
    const { emit } = ctx;
    const copiedValue = composition_api_1.ref(value);
    const dictionaries = composition_api_1.ref(props.dictionaries);
    const hints = composition_api_1.ref([]);
    const resolvedParams = composition_api_1.computed(() => {
        return [...Filters_helpers_1.buildDefinitionsSet(copiedValue.value, config.type)];
    });
    const deleteHint = (hint) => {
        hints.value = hints.value.filter(h => h.value !== hint.value);
    };
    const removeFilter = () => {
        emit('onRemove', field);
    };
    const toPrint = (filter) => composition_api_1.computed(() => {
        if (config.type === Filters_contracts_1.FilterType.Date) {
            const date = new Date(`${filter.value}`);
            return date.toLocaleDateString('pl-PL');
        }
        if (config.type === Filters_contracts_1.FilterType.Typeahead) {
            const hint = hints.value.filter(h => h.value === filter.value)[0];
            return hint ? hint.label : '--';
        }
        return Filters_helpers_1.printableValue(filter.value, config, dictionaries.value);
    });
    composition_api_1.watch(() => props.value, (newValue) => {
        copiedValue.value = newValue;
    });
    const submitFilterParams = () => {
        const valueCandidate = (Array.isArray(copiedValue.value) ? copiedValue.value
            : [copiedValue.value])
            .filter((v) => {
            return v && String(v.value).length > 0;
        });
        if (valueCandidate.length) {
            emit('onEdit', field, valueCandidate);
        }
    };
    const toggleEditMode = (open, close, isOpen) => {
        if (isOpen) {
            submitFilterParams();
            close();
            return;
        }
        open();
    };
    const setHint = (hint) => {
        hints.value.push(hint);
    };
    const setValue = (newValue) => {
        copiedValue.value = newValue;
    };
    const onBadgeClick = (close, isOpen) => {
        if (isOpen) {
            close();
            submitFilterParams();
            return;
        }
        removeFilter();
    };
    composition_api_1.onMounted(() => {
        if (!props.container) {
            return;
        }
        const idToLoad = resolvedParams.value.map(filter => {
            return filter.value;
        });
        if (idToLoad.length === 0) {
            return;
        }
        if (Object.prototype.hasOwnProperty.call(props.config, 'dictionaryLoader') &&
            typeof props.config.dictionaryLoader !== 'undefined') {
            props.config.dictionaryLoader(props.container, { id: 'in:' + idToLoad.join('|') })
                .then(response => {
                hints.value = [...response];
            });
        }
    });
    return {
        copiedValue,
        onBadgeClick,
        resolvedParams,
        toggleEditMode,
        setValue,
        hints,
        deleteHint,
        setHint,
        toPrint
    };
}
exports.useFilterBadge = useFilterBadge;
