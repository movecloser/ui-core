import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { DropdownProps, UseDropdownProvides } from './Dropdown.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dropdownProps: ComponentObjectPropsOptions<DropdownProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDropdown(props: DropdownProps, ctx: SetupContext): UseDropdownProvides;
