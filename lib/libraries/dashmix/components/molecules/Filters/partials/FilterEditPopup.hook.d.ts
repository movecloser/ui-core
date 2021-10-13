import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../../contracts';
import { FilterEditPopupProps, UseFilterEditPopup } from '../Filters.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useFilterEditPopupProps: ComponentObjectPropsOptions<FilterEditPopupProps>;
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useFilterEditPopup: (props: FilterEditPopupProps, ctx: SetupContext) => UseFilterEditPopup;
