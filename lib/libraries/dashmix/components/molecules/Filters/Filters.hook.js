"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilters = exports.useFiltersProps = exports.defaultIgnoredQueryParams = void 0;
const composition_api_1 = require("@vue/composition-api");
const filter_parser_1 = require("@movecloser/front-core/lib/services/filter-parser");
const Filters_helpers_1 = require("./Filters.helpers");
exports.defaultIgnoredQueryParams = ['q', 'page', 'perPage', 'sort'];
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.useFiltersProps = {
    container: {
        type: Object,
        required: false
    },
    config: {
        type: Object,
        required: true
    },
    query: {
        type: Object,
        required: true
    }
};
/**
 * @author Olga Milczek
 */
function useFilters(props, ctx) {
    const { container } = props;
    const { emit } = ctx;
    const filters = composition_api_1.ref({});
    const loading = composition_api_1.ref(false);
    const dictionaries = composition_api_1.ref({});
    const canRemoveAll = composition_api_1.computed(() => {
        return Object.keys(filters.value).length > 0;
    });
    const query = composition_api_1.toRef(props, 'query');
    const clearFilters = () => {
        emit('setQuery', { ...Filters_helpers_1.composeLeaveParams(query.value, props.config.leave) });
    };
    const isFromQuery = (filterKey) => {
        return !Object.keys(query.value).includes(filterKey);
    };
    const onEdit = (field, value) => {
        const actualState = JSON.stringify(filters);
        const updatedFilters = filters.value;
        updatedFilters[field] = value;
        if (props.config.leave) {
            Filters_helpers_1.composeLeaveParams(query.value, props.config.leave);
        }
        if (actualState !== JSON.stringify(updatedFilters)) {
            emit('setQuery', {
                ...Filters_helpers_1.composeLeaveParams(query.value, props.config.leave),
                ...filter_parser_1.composeQueryParams(updatedFilters),
                ...props.config.override
            });
        }
    };
    const onRemove = (field) => {
        const newFilters = filters.value;
        delete newFilters[field];
        filters.value = { ...newFilters };
        emit('setQuery', {
            ...Filters_helpers_1.composeLeaveParams(query.value, props.config.leave),
            ...filter_parser_1.composeQueryParams(filters.value),
            ...props.config.override
        });
    };
    const onFilterApply = (field) => {
        filters.value = { ...filters.value, [field]: '' };
    };
    const setQueryToFilters = (newQuery) => {
        const filteredQuery = {};
        for (const key of Object.keys(newQuery)) {
            if (props.config.ignore.includes(key))
                continue;
            filteredQuery[key] = newQuery[key];
        }
        filters.value = filter_parser_1.parseQueryParams(filteredQuery);
    };
    const filtersItems = () => {
        return Object.values(props.config.groups).map(g => {
            return {
                type: 'item',
                label: g.label,
                onClick: () => onFilterApply(g.key)
            };
        });
    };
    const shouldRender = composition_api_1.computed(() => Object.keys(props.config.groups).length > 0);
    const getDicts = (config) => {
        loading.value = true;
        const promises = [];
        for (const group of Object.values(config.groups)) {
            if (Object.prototype.hasOwnProperty.call(group, 'dictionary') && Array.isArray(group.dictionary)) {
                dictionaries.value[group.key] = group.dictionary;
            }
            if (container !== undefined &&
                Object.prototype.hasOwnProperty.call(group, 'dictionaryLoader') &&
                typeof group.dictionaryLoader !== 'undefined') {
                promises.push(group.dictionaryLoader(container).then((loaded) => {
                    dictionaries.value[group.key] = loaded;
                }));
            }
        }
        if (promises.length) {
            const promiseLoad = Promise.all(promises).then(() => {
                loading.value = false;
                dictionaries.value = { ...dictionaries.value };
            });
            promiseLoad.catch(e => console.debug(e));
        }
        else {
            loading.value = false;
        }
        setQueryToFilters(query.value);
    };
    const loadDict = (groupKey, query) => {
        loading.value = true;
        if (typeof container === 'undefined') {
            return;
        }
        const group = props.config.groups[groupKey];
        if (!group || !Object.prototype.hasOwnProperty.call(group, 'dictionaryLoader') ||
            typeof group.dictionaryLoader === 'undefined') {
            return;
        }
        group.dictionaryLoader(container, query).then((loaded) => {
            dictionaries.value = { ...dictionaries.value, [group.key]: loaded };
            loading.value = false;
        });
    };
    composition_api_1.watch(() => props.query, (newQuery) => {
        setQueryToFilters(newQuery);
    });
    composition_api_1.watch(() => props.config, (newConfig) => {
        getDicts(newConfig);
    });
    composition_api_1.onMounted(() => {
        getDicts(props.config);
    });
    return {
        canRemoveAll,
        clearFilters,
        dictionaries,
        isFromQuery,
        filters,
        filtersItems,
        loading,
        loadDict,
        onEdit,
        onFilterApply,
        onRemove,
        shouldRender
    };
}
exports.useFilters = useFilters;
