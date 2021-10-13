import { DashmixIconName } from '../../atoms';
import { DashmixTheme } from '../../../contracts';
import { FiltersProps } from './Filters.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const DashmixFilters: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    buttonTheme: typeof DashmixTheme;
    canRemoveAll: import("@vue/composition-api").ComputedRef<boolean>;
    clearFilters: () => void;
    dictionaries: import("@vue/composition-api").Ref<import("./Filters.contracts").GroupsDictionaries>;
    filters: import("@vue/composition-api").Ref<import("@movecloser/front-core").FiltersConfig>;
    filtersItems: () => import("../../../../../abstract/components/Dropdown").DropdownItem[];
    isFromQuery: (filterKey: string) => boolean;
    loadDict: (groupKey: string, query: import("@movecloser/front-core").QueryParams) => void;
    loading: import("@vue/composition-api").Ref<boolean>;
    onEdit: (field: string, value: any) => void;
    onFilterApply: (field: string) => void;
    onRemove: (field: string) => void;
    shouldRender: import("@vue/composition-api").ComputedRef<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<FiltersProps>, {} & {
    config?: any;
    container?: any;
    query?: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    config?: any;
    container?: any;
    query?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    buttonTheme: typeof DashmixTheme;
    canRemoveAll: import("@vue/composition-api").ComputedRef<boolean>;
    clearFilters: () => void;
    dictionaries: import("@vue/composition-api").Ref<import("./Filters.contracts").GroupsDictionaries>;
    filters: import("@vue/composition-api").Ref<import("@movecloser/front-core").FiltersConfig>;
    filtersItems: () => import("../../../../../abstract/components/Dropdown").DropdownItem[];
    isFromQuery: (filterKey: string) => boolean;
    loadDict: (groupKey: string, query: import("@movecloser/front-core").QueryParams) => void;
    loading: import("@vue/composition-api").Ref<boolean>;
    onEdit: (field: string, value: any) => void;
    onFilterApply: (field: string) => void;
    onRemove: (field: string) => void;
    shouldRender: import("@vue/composition-api").ComputedRef<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    config?: any;
    container?: any;
    query?: any;
}, {}, true>);
