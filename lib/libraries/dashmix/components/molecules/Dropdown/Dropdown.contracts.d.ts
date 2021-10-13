import { ComputedRef } from '@vue/composition-api';
import { DropdownProps } from '../../../../../abstract/components/Dropdown';
import { Size } from '../../../../../composables';
import { DashmixTheme } from '../../../contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixDropdownProps extends DropdownProps {
    triggerSize: Size;
    triggerTheme: DashmixTheme;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDashmixDropDownProvides {
    close: () => void;
    dropdownClass: ComputedRef<string>;
    dropdownMenuClass: ComputedRef<string>;
    isOpen: ComputedRef<boolean>;
    open: () => void;
    toggle: () => void;
}
