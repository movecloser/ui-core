import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractPaginationProps, UsePaginationProvides } from './Pagination.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const abstractPaginationProps: ComponentObjectPropsOptions<AbstractPaginationProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const usePagination: (props: AbstractPaginationProps, ctx: SetupContext) => UsePaginationProvides;
