import { DashmixFileProps } from './File.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixFile: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    fileLoadError: import("@vue/composition-api").Ref<boolean>;
    hasThumbnail: import("@vue/composition-api").ComputedRef<boolean>;
    placeholderIcon: import("@vue/composition-api").ComputedRef<{
        name: import("../Icon").DashmixIconName;
        size: import("../../../../..").SizeMap;
    }>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixFileProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    fileLoadError: import("@vue/composition-api").Ref<boolean>;
    hasThumbnail: import("@vue/composition-api").ComputedRef<boolean>;
    placeholderIcon: import("@vue/composition-api").ComputedRef<{
        name: import("../Icon").DashmixIconName;
        size: import("../../../../..").SizeMap;
    }>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
