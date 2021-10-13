"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveConjunctionOperator = exports.printableValue = exports.detectOperator = exports.composeLeaveParams = exports.buildOperatorsOptions = exports.translateOperatorToLabel = exports.buildDictionaryOptions = exports.buildDefinitionsSet = exports.buildDefinitionTemplate = exports.buildConjunctionOptions = void 0;
const front_core_1 = require("@movecloser/front-core");
const lodash_1 = require("lodash");
const Filters_contracts_1 = require("./Filters.contracts");
/**
 * Return conjunction operator options.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function buildConjunctionOptions() {
    return [
        { label: 'conjunction.and', value: front_core_1.ConjunctionOperator.And },
        { label: 'conjunction.or', value: front_core_1.ConjunctionOperator.Or }
    ];
}
exports.buildConjunctionOptions = buildConjunctionOptions;
/**
 * Return definition template.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function buildDefinitionTemplate(conjunction) {
    return { operator: front_core_1.FilterOperator.Equal, value: '', ...(conjunction ? { conjunction } : {}) };
}
exports.buildDefinitionTemplate = buildDefinitionTemplate;
/**
 * Compose set of definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function buildDefinitionsSet(value, configType = Filters_contracts_1.FilterType.String) {
    if (configType === Filters_contracts_1.FilterType.Date && typeof value === 'string') {
        return [{ operator: front_core_1.FilterOperator.GreaterEqual, value }];
    }
    switch (typeof value) {
        case 'boolean':
        case 'number':
        case 'string':
            return [{ operator: front_core_1.FilterOperator.Equal, value }];
    }
    return Array.isArray(value) ? value : [value];
}
exports.buildDefinitionsSet = buildDefinitionsSet;
/**
 * Build dictionary options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function buildDictionaryOptions(dictionaries, field) {
    if (!Object.prototype.hasOwnProperty.call(dictionaries, field)) {
        return [];
    }
    return dictionaries[field];
}
exports.buildDictionaryOptions = buildDictionaryOptions;
/**
 * Return label for given operator.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function translateOperatorToLabel(operator, configType) {
    if (configType === Filters_contracts_1.FilterType.Date) {
        switch (operator) {
            case front_core_1.FilterOperator.GreaterEqual:
                return 'filters.operators.from';
            case front_core_1.FilterOperator.LessEqual:
                return 'filters.operators.to';
        }
    }
    switch (operator) {
        case front_core_1.FilterOperator.GreaterEqual:
            return '>=';
        case front_core_1.FilterOperator.GreaterThan:
            return '>';
        case front_core_1.FilterOperator.LessEqual:
            return '<=';
        case front_core_1.FilterOperator.LessThan:
            return '<';
        case front_core_1.FilterOperator.Like:
            return 'filters.operators.contains';
        case front_core_1.FilterOperator.NotEqual:
            return 'filters.operators.isNot';
        case front_core_1.FilterOperator.Equal:
        default:
            return 'filters.operators.is';
    }
}
exports.translateOperatorToLabel = translateOperatorToLabel;
/**
 * Build operators options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function buildOperatorsOptions(type) {
    let operators;
    const options = [];
    switch (type) {
        case Filters_contracts_1.FilterType.Dictionary:
            operators = [front_core_1.FilterOperator.Equal, front_core_1.FilterOperator.NotEqual];
            break;
        case Filters_contracts_1.FilterType.Boolean:
            operators = [front_core_1.FilterOperator.Equal];
            break;
        case Filters_contracts_1.FilterType.String:
            operators = [front_core_1.FilterOperator.Equal, front_core_1.FilterOperator.NotEqual, front_core_1.FilterOperator.Like];
            break;
        case Filters_contracts_1.FilterType.Date:
            operators = [front_core_1.FilterOperator.GreaterEqual, front_core_1.FilterOperator.LessEqual];
            break;
        default:
            operators = Object.values(front_core_1.FilterOperator);
    }
    for (const operator of operators) {
        options.push({ label: translateOperatorToLabel(operator, type), value: operator });
    }
    return options;
}
exports.buildOperatorsOptions = buildOperatorsOptions;
/**
 * Return query which shouldn't be override by filters
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
function composeLeaveParams(query, queryToLeave) {
    if (!queryToLeave) {
        return {};
    }
    return lodash_1.pickBy(query, (v, key) => queryToLeave.includes(key));
}
exports.composeLeaveParams = composeLeaveParams;
/**
 * Return operator based on Filter inner type.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function detectOperator(filter) {
    switch (typeof filter) {
        case 'boolean':
        case 'number':
        case 'string':
            return front_core_1.FilterOperator.Equal;
        default:
            return filter.operator || front_core_1.FilterOperator.Equal;
    }
}
exports.detectOperator = detectOperator;
/**
 * Return value to print taking into consideration definition of
 * group & it's dictionaries.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function printableValue(value, config, dictionaries) {
    var _a;
    if (config.type === Filters_contracts_1.FilterType.Boolean)
        return value ? 'true' : 'false';
    if (config.type !== Filters_contracts_1.FilterType.Dictionary)
        return String(value);
    if (!Object.prototype.hasOwnProperty.call(dictionaries, config.key))
        return value;
    return ((_a = dictionaries[config.key].find(d => d.value === value)) === null || _a === void 0 ? void 0 : _a.label) || value;
}
exports.printableValue = printableValue;
/**
 * Resolve conjunction operator based on value.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function resolveConjunctionOperator(value, defaultValue) {
    return value.length > 1 ? (value[1].conjunction || defaultValue) : defaultValue;
}
exports.resolveConjunctionOperator = resolveConjunctionOperator;
