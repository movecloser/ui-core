import { SetupContext } from '@vue/composition-api';
import { DropdownItem } from '../../../../../../abstract/components/Dropdown';
import { TableRowProps } from '../../../../../../abstract/components/Table';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDashmixTableRow(props: TableRowProps, ctx: SetupContext): {
    dropdownActions: import("@vue/composition-api").ComputedRef<DropdownItem[]>;
    isSelected: import("@vue/composition-api").ComputedRef<boolean>;
    selected: import("@vue/composition-api").WritableComputedRef<unknown[]>;
};
