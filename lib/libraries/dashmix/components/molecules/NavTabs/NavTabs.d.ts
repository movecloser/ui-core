import { DashmixNavTabsProps } from './NavTabs.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixNavTabs: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    activeTab: import("@vue/composition-api").WritableComputedRef<string>;
    activateTab: (id: string) => void;
    isTabActive: (id: string) => boolean;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixNavTabsProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    activeTab: import("@vue/composition-api").WritableComputedRef<string>;
    activateTab: (id: string) => void;
    isTabActive: (id: string) => boolean;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
