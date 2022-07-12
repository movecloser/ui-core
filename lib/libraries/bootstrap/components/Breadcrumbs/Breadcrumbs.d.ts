import { BootstrapBreadcrumbsProps } from './Breadcrumbs.contracts';
/**
 * @scopedSlot icon - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 * @scopedSlot label - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 *
 * @see https://bootstrap-vue.org/docs/components/breadcrumb
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const BootstrapBreadcrumbs: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isLast: (item: import("./Breadcrumbs.contracts").BootstrapBreadcrumbsItem) => boolean;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../..").ComponentObjectPropsOptions<BootstrapBreadcrumbsProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    isLast: (item: import("./Breadcrumbs.contracts").BootstrapBreadcrumbsItem) => boolean;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
