// Copyright © 2021 Move Closer

import {
  ConjunctionOperator,
  Filter,
  FilterOperator,
  FilterParams,
  QueryParams
} from '@movecloser/front-core'
import { pickBy } from 'lodash'

import { DashmixSelectItem } from '../../atoms'

import { FilterType, Group, GroupsDictionaries } from './Filters.contracts'

/**
 * Return conjunction operator options.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function buildConjunctionOptions (): DashmixSelectItem[] {
  return [
    { label: 'conjunction.and', value: ConjunctionOperator.And },
    { label: 'conjunction.or', value: ConjunctionOperator.Or }
  ]
}

/**
 * Return definition template.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function buildDefinitionTemplate (conjunction?: ConjunctionOperator): FilterParams {
  return { operator: FilterOperator.Equal, value: '', ...(conjunction ? { conjunction } : {}) }
}

/**
 * Compose set of definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function buildDefinitionsSet (
  value: Filter,
  configType: FilterType = FilterType.String
): FilterParams[] {
  if (configType === FilterType.Date && typeof value === 'string') {
    return [{ operator: FilterOperator.GreaterEqual, value }]
  }
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'string':
      return [{ operator: FilterOperator.Equal, value }]
  }

  return Array.isArray(value) ? value : [value]
}

/**
 * Build dictionary options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function buildDictionaryOptions (
  dictionaries: GroupsDictionaries,
  field: string
): DashmixSelectItem[] {
  if (!Object.prototype.hasOwnProperty.call(dictionaries, field)) {
    return []
  }

  return dictionaries[field]
}

/**
 * Return label for given operator.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function translateOperatorToLabel (
  operator: FilterOperator,
  configType: FilterType
): string {
  if (configType === FilterType.Date) {
    switch (operator) {
      case FilterOperator.GreaterEqual:
        return 'filters.operators.from'
      case FilterOperator.LessEqual:
        return 'filters.operators.to'
    }
  }
  switch (operator) {
    case FilterOperator.GreaterEqual:
      return '>='
    case FilterOperator.GreaterThan:
      return '>'
    case FilterOperator.LessEqual:
      return '<='
    case FilterOperator.LessThan:
      return '<'
    case FilterOperator.Like:
      return 'filters.operators.contains'
    case FilterOperator.NotEqual:
      return 'filters.operators.isNot'
    case FilterOperator.Equal:
    default:
      return 'filters.operators.is'
  }
}

/**
 * Build operators options set.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function buildOperatorsOptions (type: FilterType): DashmixSelectItem[] {
  let operators: FilterOperator[]
  const options: DashmixSelectItem[] = []

  switch (type) {
    case FilterType.Dictionary:
      operators = [FilterOperator.Equal, FilterOperator.NotEqual]
      break
    case FilterType.Boolean:
      operators = [FilterOperator.Equal]
      break
    case FilterType.String:
      operators = [FilterOperator.Equal, FilterOperator.NotEqual, FilterOperator.Like]
      break

    case FilterType.Date:
      operators = [FilterOperator.GreaterEqual, FilterOperator.LessEqual]
      break
    default:
      operators = Object.values(FilterOperator)
  }

  for (const operator of operators) {
    options.push({ label: translateOperatorToLabel(operator, type), value: operator })
  }

  return options
}

/**
 * Return query which shouldn't be override by filters
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export function composeLeaveParams (query: QueryParams, queryToLeave?: string[]) {
  if (!queryToLeave) {
    return {}
  }
  return pickBy(query, (v, key) => queryToLeave.includes(key))
}

/**
 * Return operator based on Filter inner type.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function detectOperator (filter: Filter): FilterOperator {
  switch (typeof filter) {
    case 'boolean':
    case 'number':
    case 'string':
      return FilterOperator.Equal
    default:
      return (filter as FilterParams).operator || FilterOperator.Equal
  }
}

/**
 * Return value to print taking into consideration definition of
 * group & it's dictionaries.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function printableValue (
  value: any,
  config: Group,
  dictionaries: GroupsDictionaries
): string {
  if (config.type === FilterType.Boolean) return value ? 'true' : 'false'

  if (config.type !== FilterType.Dictionary) return String(value)

  if (!Object.prototype.hasOwnProperty.call(dictionaries, config.key)) return value

  return dictionaries[config.key].find(d => d.value === value)?.label || value
}

/**
 * Resolve conjunction operator based on value.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function resolveConjunctionOperator (
  value: FilterParams[],
  defaultValue: ConjunctionOperator
): ConjunctionOperator {
  return value.length > 1 ? (value[1].conjunction || defaultValue) : defaultValue
}
