/// <reference types="lodash" />
import { ConjunctionOperator, Filter, FilterOperator, FilterParams, QueryParams } from '@movecloser/front-core';
import { DashmixSelectItem } from '../../atoms';
import { FilterType, Group, GroupsDictionaries } from './Filters.contracts';
/**
 * Return conjunction operator options.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function buildConjunctionOptions(): DashmixSelectItem[];
/**
 * Return definition template.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function buildDefinitionTemplate(conjunction?: ConjunctionOperator): FilterParams;
/**
 * Compose set of definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function buildDefinitionsSet(value: Filter, configType?: FilterType): FilterParams[];
/**
 * Build dictionary options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function buildDictionaryOptions(dictionaries: GroupsDictionaries, field: string): DashmixSelectItem[];
/**
 * Return label for given operator.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function translateOperatorToLabel(operator: FilterOperator, configType: FilterType): string;
/**
 * Build operators options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function buildOperatorsOptions(type: FilterType): DashmixSelectItem[];
/**
 * Return query which shouldn't be override by filters
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare function composeLeaveParams(query: QueryParams, queryToLeave?: string[]): import("lodash").Dictionary<string | number | boolean | undefined>;
/**
 * Return operator based on Filter inner type.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function detectOperator(filter: Filter): FilterOperator;
/**
 * Return value to print taking into consideration definition of
 * group & it's dictionaries.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function printableValue(value: any, config: Group, dictionaries: GroupsDictionaries): string;
/**
 * Resolve conjunction operator based on value.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function resolveConjunctionOperator(value: FilterParams[], defaultValue: ConjunctionOperator): ConjunctionOperator;
