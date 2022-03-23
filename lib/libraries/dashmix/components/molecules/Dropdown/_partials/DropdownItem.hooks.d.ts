import { SetupContext } from '@vue/composition-api';
import { DropdownItemProps } from '../../../../../../abstract/components/Dropdown';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDashmixDropdownItem(props: DropdownItemProps, ctx: SetupContext): {
    itemClass: import("@vue/composition-api").ComputedRef<string>;
    isClickable: import("@vue/composition-api").ComputedRef<boolean>;
    isLoading: import("@vue/composition-api").Ref<boolean>;
    onClick: () => void;
};
