"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilterEditPopupDefinition = exports.useFilterEditPopupDefinitionProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const lodash_1 = require("lodash");
const Filters_helpers_1 = require("../Filters.helpers");
const Filters_contracts_1 = require("../Filters.contracts");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.useFilterEditPopupDefinitionProps = {
    config: {
        type: Object,
        required: true
    },
    dictionaries: {
        type: Object,
        required: true
    },
    definition: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    hints: {
        type: Array,
        required: false,
        default: () => []
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useFilterEditPopupDefinition = (props, internalInstance) => {
    const { config, definition } = props;
    if (internalInstance === null) {
        throw new Error('useFilterEditPopupDefinition(): FATAL ERROR! Failed to resolve the component instance!');
    }
    const { emit, proxy } = internalInstance;
    const definitionOperator = composition_api_1.ref(definition.operator);
    const value = composition_api_1.ref(definition.value);
    const dictionaries = composition_api_1.toRef(props, 'dictionaries');
    const haveSelectOperator = composition_api_1.computed(() => {
        return !(config.type === Filters_contracts_1.FilterType.Dictionary || config.type === Filters_contracts_1.FilterType.Typeahead);
    });
    const isDate = composition_api_1.computed(() => {
        return config.type === Filters_contracts_1.FilterType.Date;
    });
    const isEnumerable = composition_api_1.computed(() => {
        return config.type === Filters_contracts_1.FilterType.Dictionary;
    });
    const isSearchable = composition_api_1.computed(() => {
        return config.type === Filters_contracts_1.FilterType.Typeahead;
    });
    const dictionariesOptions = () => {
        return Filters_helpers_1.buildDictionaryOptions(dictionaries.value, config.key).map(o => {
            return {
                label: proxy.$t(o.label).toString(),
                value: o.value
            };
        });
    };
    const selected = () => {
        if (!value.value) {
            return [];
        }
        return props.hints.filter(h => h.value === value.value);
    };
    const operatorsOptions = composition_api_1.computed(() => {
        return Filters_helpers_1.buildOperatorsOptions(config.type).map(o => {
            return {
                label: proxy.$t(o.label).toString(),
                value: o.value
            };
        });
    });
    const onRemove = () => {
        emit('onRemove');
    };
    const onClear = () => {
        emit('search', {});
    };
    const onDelete = (selectedHint) => {
        value.value = '';
        emit('deleteHint', selectedHint);
    };
    const onSelect = (selectedHint) => {
        value.value = selectedHint.value;
        emit('setHint', selectedHint);
    };
    const onSearch = (searchedParams) => {
        emit('search', { q: searchedParams });
    };
    const onInputChange = lodash_1.debounce((newValue) => {
        onInputChange.cancel();
        emit('onChange', { value: newValue });
    }, 500);
    composition_api_1.watch(() => value.value, onInputChange);
    composition_api_1.watch(() => definitionOperator.value, (newDefinitionOperator) => {
        emit('onChange', { operator: newDefinitionOperator });
    });
    return {
        dictionariesOptions,
        definitionOperator,
        isDate,
        isEnumerable,
        isSearchable,
        haveSelectOperator,
        operatorsOptions,
        onRemove,
        onSearch,
        onSelect,
        onDelete,
        onClear,
        value,
        selected
    };
};
exports.useFilterEditPopupDefinition = useFilterEditPopupDefinition;
