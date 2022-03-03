"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = exports.tableProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.tableProps = {
    /**
     * Table actions
     */
    actions: {
        type: Array,
        required: false,
        default: () => []
    },
    /**
     * Table head row elements
     */
    head: {
        type: Array,
        required: true
    },
    /**
     * Hide last border in table
     */
    hideLastBorder: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Triggers table loading state
     */
    isLoading: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Number of rows that will display
     */
    numberOfRows: {
        type: Number,
        required: false,
        default: 25
    },
    /**
     * Table body row elements
     */
    rows: {
        type: Array,
        required: false,
        default: () => []
    },
    /**
     * Display column with actions
     */
    showActions: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Display column made for selecting rows
     */
    showSelection: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Defines what is table sorted by
     */
    sortedBy: {
        type: Object,
        required: false
    },
    /**
     * Determines whatever table should show two fake rows if is empty
     */
    withEmptyRows: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useTable = (props, ctx) => {
    const { head, isLoading, rows, showSelection, showActions, sortedBy } = composition_api_1.toRefs(props);
    const bulkSelection = composition_api_1.ref(false);
    const selectedRows = composition_api_1.ref([]);
    const gridColumns = composition_api_1.computed(() => {
        return (showSelection.value ? 'auto' : '') + head.value.reduceRight(
        // TODO - add responsive design to table - without hardcoded min-width.
        // WARNING - changing min-width 5rem will break RWD of tabel.
        (prev, headElement) => (` minmax(${headElement.width
            ? (headElement.width.includes('px') || headElement.width.includes('em')
                ? headElement.width : '5rem') : '5rem'},` +
            ` ${headElement.width ? headElement.width : '1fr'})`) + prev, `${showActions.value ? ' minmax(5rem, max-content)' : ''}`);
    });
    const isEmpty = composition_api_1.computed(() => {
        return !isLoading.value && rows.value.length === 0;
    });
    const handleSort = (headElement, sortDirection) => {
        if (!sortDirection && sortedBy && sortedBy.value) {
            ctx.emit('sortBy', headElement.column);
            return;
        }
        ctx.emit('sortBy', headElement.column, sortDirection);
    };
    composition_api_1.watch(bulkSelection, (value) => {
        const selectableRows = rows.value.filter(r => r.selectable);
        selectedRows.value = value
            ? selectableRows.map(r => r.id)
            : (selectedRows.value.length < selectableRows.length ? selectedRows.value : []);
    });
    composition_api_1.watch(selectedRows, () => {
        const selectableRows = rows.value.filter(r => r.selectable);
        if (!bulkSelection.value && selectedRows.value.length === selectableRows.length) {
            bulkSelection.value = true;
        }
        if (bulkSelection.value && selectedRows.value.length < selectableRows.length) {
            bulkSelection.value = false;
        }
        ctx.emit('selected', {
            allSelected: bulkSelection.value,
            selected: selectedRows.value
        });
    });
    return { bulkSelection, gridColumns, handleSort, isEmpty, selectedRows };
};
exports.useTable = useTable;
