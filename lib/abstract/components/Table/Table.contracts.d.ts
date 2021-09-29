import { ComputedRef, Data, Ref, WritableComputedRef } from '@vue/composition-api';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type CurrentSorting = Sort;
/**
 * Defines current sorting configuration state.
 *
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface Sort {
    direction: SortDirection;
    field: string;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type SortDirection = 'asc' | 'desc';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum SortDirectionMap {
    Asc = "asc",
    Desc = "desc"
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type TableBody = TableRowElement[];
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface TableFakeRowProps {
    gridColumns: string;
    head: TableHead;
    isLoading: boolean;
    rowsCount: number;
    showSelection: boolean;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface TableHeadElement {
    column: string;
    label: string;
    sortable?: boolean;
    isSorted?: boolean;
    width?: string;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export declare type TableHead = TableHeadElement[];
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export interface TableRowAction {
    action: string;
    guard?: <Data = unknown>(data: Data) => boolean;
    icon?: string;
    label: string;
    needsDoubleClick?: boolean;
    theme?: string;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface TableRowActionEvent<Data = unknown, Id = unknown> {
    action: string;
    data: Data;
    id: Id;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export declare type TableRowActions = TableRowAction[];
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export interface TableProps extends Data {
    actions: TableRowActions;
    head: TableHead;
    hideLastBorder: boolean;
    isLoading: boolean;
    numberOfRows: number;
    rows: TableBody;
    showActions: boolean;
    showSelection: boolean;
    sortedBy?: CurrentSorting;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface TableSelectionEvent {
    allSelected: boolean;
    selected: unknown[];
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export interface TableRowElement {
    id: unknown;
    selectable: boolean;
    data: unknown;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export interface TableRowProps extends Data {
    actions: TableRowActions;
    gridColumns: string;
    index: number;
    row: TableRowElement;
    selectedRows: unknown[];
    showActions: boolean;
    showSelection: boolean;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseTableProvides {
    bulkSelection: Ref<boolean>;
    gridColumns: ComputedRef<string>;
    handleSort: (headElement: TableHeadElement, sortDirection?: SortDirection) => void;
    isEmpty: ComputedRef<boolean>;
    selectedRows: Ref<unknown>;
}
export interface UseTableRowProvides {
    filteredActions: ComputedRef<TableRowAction[]>;
    isSelected: ComputedRef<boolean>;
    selected: WritableComputedRef<unknown[]>;
}
