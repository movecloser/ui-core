import { ConjunctionOperator, Container, Filter, FilterOperator, FilterParams, FiltersConfig as Config, QueryParams } from '@movecloser/front-core';
import { ComputedRef, Ref } from '@vue/composition-api';
import { DropdownItem } from '../../../../../abstract/components/Dropdown';
import { DashmixSelectItem } from '../../atoms';
import { Hint } from '../Typeahead';
export declare type DictionaryLoader = (container: Container, query?: QueryParams) => Promise<GroupDictionary>;
export interface DictionaryValue {
    label: string;
    value: string;
}
export interface Group {
    dictionary?: GroupDictionary;
    dictionaryLoader?: DictionaryLoader;
    key: string;
    label: string;
    predefined?: FilterPredefinedValue[];
    type: FilterType;
}
export declare type GroupDictionary = DictionaryValue[];
export interface GroupsConfig {
    [key: string]: Group;
}
export interface GroupsDictionaries {
    [key: string]: DictionaryValue[];
}
export interface FilterBadgeProps {
    config: Group;
    container: Container;
    dictionaries: GroupsDictionaries;
    field: string;
    isNew: boolean;
    loading: boolean;
    value: Filter;
}
export interface FilterEditPopupDefinitionProps {
    config: Group;
    definition: FilterParams;
    dictionaries: GroupsDictionaries;
    hints: Hint[];
    index: number;
    loading: boolean;
}
export interface FilterEditPopupProps {
    config: Group;
    dictionaries: GroupsDictionaries;
    hints: Hint[];
    loading: boolean;
    value: Filter;
}
export interface FilterPredefinedValue {
    display: string;
    value: Filter;
}
export declare enum FilterType {
    Boolean = "boolean",
    Date = "date",
    Dictionary = "dictionary",
    Number = "number",
    String = "string",
    Typeahead = "typeahead"
}
export interface FiltersConfig {
    groups: GroupsConfig;
    ignore: string[];
    leave?: string[];
    override: QueryParams;
}
export interface FiltersProps {
    config: FiltersConfig;
    container: Container;
    query: QueryParams;
}
export interface UseFiltersProvides {
    canRemoveAll: ComputedRef<boolean>;
    clearFilters: () => void;
    dictionaries: Ref<GroupsDictionaries>;
    filters: Ref<Config>;
    filtersItems: () => DropdownItem[];
    isFromQuery: (filterKey: string) => boolean;
    loadDict: (groupKey: string, query: QueryParams) => void;
    loading: Ref<boolean>;
    onEdit: (field: string, value: any) => void;
    onFilterApply: (field: string) => void;
    onRemove: (field: string) => void;
    shouldRender: ComputedRef<boolean>;
}
export interface UseFilterBadge {
    copiedValue: Ref<Filter>;
    deleteHint: (hint: Hint) => void;
    hints: Ref<Hint[]>;
    onBadgeClick: (close: () => void, isOpen: boolean) => void;
    resolvedParams: Ref<FilterParams[]>;
    setHint: (hint: Hint) => void;
    setValue: (newValue: Filter) => void;
    toPrint: (filter: FilterParams) => ComputedRef<string>;
    toggleEditMode: (open: () => void, close: () => void, isOpen: boolean) => void;
}
export interface UseFilterEditPopup {
    addClearDefinition: () => void;
    conjunction: Ref<ConjunctionOperator>;
    conjunctionOptions: DashmixSelectItem[];
    definitions: Ref<FilterParams[]>;
    onDefinitionChange: (changed: FilterParams, index: number) => void;
    onDefinitionRemove: (index: number) => void;
    setNewConjunction: (newConjunction: ConjunctionOperator) => void;
}
export interface UseFilterEditPopupDefinition {
    definitionOperator: Ref<FilterOperator | undefined>;
    dictionariesOptions: () => DashmixSelectItem[];
    haveSelectOperator: ComputedRef<boolean>;
    isDate: ComputedRef<boolean>;
    isEnumerable: ComputedRef<boolean>;
    isSearchable: ComputedRef<boolean>;
    onClear: () => void;
    onDelete: (selected: Hint) => void;
    onRemove: () => void;
    onSearch: (searchParams: string) => void;
    onSelect: (selected: Hint) => void;
    operatorsOptions: ComputedRef<DashmixSelectItem[]>;
    selected: () => Hint[];
    value: Ref<string | number | boolean>;
}
