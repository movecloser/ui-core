import { DashmixIconName } from '../../atoms/Icon';
import { DashmixPaginationProps } from './Pagination.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixPagination: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    _currentPage: import("@vue/composition-api").WritableComputedRef<number>;
    _perPage: import("@vue/composition-api").WritableComputedRef<number>;
    canGoBack: import("@vue/composition-api").ComputedRef<boolean>;
    canGoFurther: import("@vue/composition-api").ComputedRef<boolean>;
    nextPage: () => void;
    pagesTotal: import("@vue/composition-api").ComputedRef<number>;
    perPageOptions: import("../../atoms/Select").DashmixSelectItem[];
    prevPage: () => void;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixPaginationProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    _currentPage: import("@vue/composition-api").WritableComputedRef<number>;
    _perPage: import("@vue/composition-api").WritableComputedRef<number>;
    canGoBack: import("@vue/composition-api").ComputedRef<boolean>;
    canGoFurther: import("@vue/composition-api").ComputedRef<boolean>;
    nextPage: () => void;
    pagesTotal: import("@vue/composition-api").ComputedRef<number>;
    perPageOptions: import("../../atoms/Select").DashmixSelectItem[];
    prevPage: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
