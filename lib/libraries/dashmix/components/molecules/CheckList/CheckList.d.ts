import { DashmixCheckListProps } from './CheckList.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixCheckList: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    getFieldId: (index: number) => string;
    themeClass: import("../../../../..").UseThemeClassProvides;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    validationClass: import("../../../../..").UseValidMarkerProvides;
    checkType: import("@vue/composition-api").Ref<import("../../../../..").AbstractCheckControlType>;
    checked: import("@vue/composition-api").WritableComputedRef<import("../../../../..").AbstractCheckControlModelType<string | number | boolean>>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixCheckListProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    getFieldId: (index: number) => string;
    themeClass: import("../../../../..").UseThemeClassProvides;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    validationClass: import("../../../../..").UseValidMarkerProvides;
    checkType: import("@vue/composition-api").Ref<import("../../../../..").AbstractCheckControlType>;
    checked: import("@vue/composition-api").WritableComputedRef<import("../../../../..").AbstractCheckControlModelType<string | number | boolean>>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
