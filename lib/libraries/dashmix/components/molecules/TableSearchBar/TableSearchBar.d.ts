import { DashmixIconName } from '../../atoms/Icon';
import { DashmixTableSearchBarProps } from './TableSearchBar.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixTableSearchBar: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    bulkActions: import("@vue/composition-api").ComputedRef<import("./TableSearchBar.contracts").TableSearchBarAction[]>;
    confirmAction: import("@vue/composition-api").Ref<unknown>;
    searchModel: import("@vue/composition-api").WritableComputedRef<string>;
    showConfirmModal: import("@vue/composition-api").Ref<boolean>;
    showFilterModal: import("@vue/composition-api").Ref<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixTableSearchBarProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    bulkActions: import("@vue/composition-api").ComputedRef<import("./TableSearchBar.contracts").TableSearchBarAction[]>;
    confirmAction: import("@vue/composition-api").Ref<unknown>;
    searchModel: import("@vue/composition-api").WritableComputedRef<string>;
    showConfirmModal: import("@vue/composition-api").Ref<boolean>;
    showFilterModal: import("@vue/composition-api").Ref<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
