import { BootstrapButtonProps } from './Button.contracts';
/**
 * @emits click - When the button gets clicked.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const BootstrapButton: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    loadingClass: import("@vue/composition-api").ComputedRef<string>;
    variant: import("@vue/composition-api").ComputedRef<string>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../..").ComponentObjectPropsOptions<BootstrapButtonProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    loadingClass: import("@vue/composition-api").ComputedRef<string>;
    variant: import("@vue/composition-api").ComputedRef<string>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
