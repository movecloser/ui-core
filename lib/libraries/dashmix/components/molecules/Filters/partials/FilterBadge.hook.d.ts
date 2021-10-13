import { SetupContext } from '@vue/composition-api';
import { FilterBadgeProps, UseFilterBadge } from '../Filters.contracts';
import { ComponentObjectPropsOptions } from '../../../../../../contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const filterBadgeProps: ComponentObjectPropsOptions<FilterBadgeProps>;
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare function useFilterBadge(props: FilterBadgeProps, ctx: SetupContext): UseFilterBadge;
