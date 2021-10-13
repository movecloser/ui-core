import { SortDirectionMap, TableProps } from '../../../../../abstract/components/Table';
import { DashmixIconName } from '../../atoms/Icon';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixTable: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    direction: typeof SortDirectionMap;
    bulkSelection: import("@vue/composition-api").Ref<boolean>;
    gridColumns: import("@vue/composition-api").ComputedRef<string>;
    handleSort: (headElement: import("../../../../../abstract/components/Table").TableHeadElement, sortDirection?: "asc" | "desc" | undefined) => void;
    isEmpty: import("@vue/composition-api").ComputedRef<boolean>;
    selectedRows: import("@vue/composition-api").Ref<unknown>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<TableProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    direction: typeof SortDirectionMap;
    bulkSelection: import("@vue/composition-api").Ref<boolean>;
    gridColumns: import("@vue/composition-api").ComputedRef<string>;
    handleSort: (headElement: import("../../../../../abstract/components/Table").TableHeadElement, sortDirection?: "asc" | "desc" | undefined) => void;
    isEmpty: import("@vue/composition-api").ComputedRef<boolean>;
    selectedRows: import("@vue/composition-api").Ref<unknown>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
