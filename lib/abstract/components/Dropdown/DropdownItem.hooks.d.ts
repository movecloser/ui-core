import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { DropdownItemProps, UseDropdownItemProvides } from './Dropdown.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dropdownItemProps: ComponentObjectPropsOptions<DropdownItemProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDropdownItem(props: DropdownItemProps, ctx: SetupContext): UseDropdownItemProvides;
