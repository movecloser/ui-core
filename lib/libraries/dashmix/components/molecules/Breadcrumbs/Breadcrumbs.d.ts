import { PropType } from '@vue/composition-api';
import { AbstractBreadcrumbsItem } from '../../../../../abstract';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixBreadcrumbs: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
    root: {
        type: PropType<AbstractBreadcrumbsItem>;
        required: true;
    };
    items: (new (...args: string[]) => Function) | import("@vue/composition-api").PropOptions<AbstractBreadcrumbsItem[], AbstractBreadcrumbsItem[]> | (new (...args: any[]) => AbstractBreadcrumbsItem[] & object) | (() => AbstractBreadcrumbsItem[]) | ((new (...args: string[]) => Function) | (new (...args: any[]) => AbstractBreadcrumbsItem[] & object) | (() => AbstractBreadcrumbsItem[]))[] | null;
    showOnMobile: (new (...args: string[]) => Function) | import("@vue/composition-api").PropOptions<boolean, boolean> | (new (...args: any[]) => never) | (() => boolean) | ((new (...args: string[]) => Function) | (new (...args: any[]) => never) | (() => boolean))[] | null;
}, {
    root: AbstractBreadcrumbsItem;
} & {
    items?: any;
    showOnMobile?: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    root: AbstractBreadcrumbsItem;
} & {
    items?: any;
    showOnMobile?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    root: AbstractBreadcrumbsItem;
} & {
    items?: any;
    showOnMobile?: any;
}, {}, true>);
