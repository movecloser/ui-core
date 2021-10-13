import { ComputedRef, Data, Ref, WritableComputedRef } from '@vue/composition-api';
import { TableRowAction } from '../../../../../abstract/components/Table';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixTableSearchBarProps extends Data {
    actions: TableSearchBarAction[];
    isProcessing: boolean;
    searchPlaceholder: string;
    searchValue: string;
    selected: string[];
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface TableSearchBarAction extends TableRowAction {
    isBulkAction: boolean;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDashmixTableSearchBarProvides {
    bulkActions: ComputedRef<TableSearchBarAction[]>;
    confirmAction: Ref<unknown>;
    searchModel: WritableComputedRef<string>;
    showConfirmModal: Ref<boolean>;
    showFilterModal: Ref<boolean>;
}
