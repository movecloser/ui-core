import { DashmixTheme } from '../../../../contracts';
import { SizeMap } from '../../../../../../composables';
import { DashmixIconName } from '../../../atoms';
import { FilterEditPopupDefinitionProps } from '../Filters.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const FilterEditPopupDefinition: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    btnTheme: typeof DashmixTheme;
    sizes: typeof SizeMap;
    definitionOperator: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterOperator | undefined>;
    dictionariesOptions: () => import("../../../atoms").DashmixSelectItem[];
    haveSelectOperator: import("@vue/composition-api").ComputedRef<boolean>;
    isDate: import("@vue/composition-api").ComputedRef<boolean>;
    isEnumerable: import("@vue/composition-api").ComputedRef<boolean>;
    isSearchable: import("@vue/composition-api").ComputedRef<boolean>;
    onClear: () => void;
    onDelete: (selected: import("../../Typeahead").Hint) => void;
    onRemove: () => void;
    onSearch: (searchParams: string) => void;
    onSelect: (selected: import("../../Typeahead").Hint) => void;
    operatorsOptions: import("@vue/composition-api").ComputedRef<import("../../../atoms").DashmixSelectItem[]>;
    selected: () => import("../../Typeahead").Hint[];
    value: import("@vue/composition-api").Ref<import("../../../../../..").FormControlModelType>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<FilterEditPopupDefinitionProps>, {} & {
    loading?: any;
    index?: any;
    hints?: any;
    config?: any;
    dictionaries?: any;
    definition?: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    loading?: any;
    index?: any;
    hints?: any;
    config?: any;
    dictionaries?: any;
    definition?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    btnTheme: typeof DashmixTheme;
    sizes: typeof SizeMap;
    definitionOperator: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterOperator | undefined>;
    dictionariesOptions: () => import("../../../atoms").DashmixSelectItem[];
    haveSelectOperator: import("@vue/composition-api").ComputedRef<boolean>;
    isDate: import("@vue/composition-api").ComputedRef<boolean>;
    isEnumerable: import("@vue/composition-api").ComputedRef<boolean>;
    isSearchable: import("@vue/composition-api").ComputedRef<boolean>;
    onClear: () => void;
    onDelete: (selected: import("../../Typeahead").Hint) => void;
    onRemove: () => void;
    onSearch: (searchParams: string) => void;
    onSelect: (selected: import("../../Typeahead").Hint) => void;
    operatorsOptions: import("@vue/composition-api").ComputedRef<import("../../../atoms").DashmixSelectItem[]>;
    selected: () => import("../../Typeahead").Hint[];
    value: import("@vue/composition-api").Ref<import("../../../../../..").FormControlModelType>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    loading?: any;
    index?: any;
    hints?: any;
    config?: any;
    dictionaries?: any;
    definition?: any;
}, {}, true>);
