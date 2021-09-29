import { ComputedRef } from '@vue/composition-api';
import { TableItem } from '../../Table.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface TableCellProps {
    /**
     * Item's index in the `items` array (table's data source).
     */
    index: number;
    /**
     * Full table item.
     */
    item: TableItem;
    /**
     * Item's value for the given key, associated with the current table cell.
     */
    value: unknown;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface UseBootstrapTableCellProvides {
    /**
     * Determines whether the item should be rendered as a Vue component.
     */
    shouldRenderComponent: ComputedRef<boolean>;
}
