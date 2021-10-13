import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { FiltersProps, UseFiltersProvides } from './Filters.contracts';
export declare const defaultIgnoredQueryParams: string[];
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useFiltersProps: ComponentObjectPropsOptions<FiltersProps>;
/**
 * @author Olga Milczek
 */
export declare function useFilters(props: FiltersProps, ctx: SetupContext): UseFiltersProvides;
