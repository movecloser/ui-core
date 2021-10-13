import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixDropdownProps, UseDashmixDropDownProvides } from './Dropdown.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownProps: ComponentObjectPropsOptions<DashmixDropdownProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixDropdown: (props: DashmixDropdownProps, ctx: SetupContext) => UseDashmixDropDownProvides;
