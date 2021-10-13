import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixPaginationProps } from './Pagination.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixPaginationProps: ComponentObjectPropsOptions<DashmixPaginationProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixPagination: (props: DashmixPaginationProps, ctx: SetupContext) => {
    _currentPage: import("@vue/composition-api").WritableComputedRef<number>;
    _perPage: import("@vue/composition-api").WritableComputedRef<number>;
    canGoBack: import("@vue/composition-api").ComputedRef<boolean>;
    canGoFurther: import("@vue/composition-api").ComputedRef<boolean>;
    nextPage: () => void;
    pagesTotal: import("@vue/composition-api").ComputedRef<number>;
    perPageOptions: import("../..").DashmixSelectItem[];
    prevPage: () => void;
};
