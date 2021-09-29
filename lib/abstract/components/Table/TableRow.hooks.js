"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableRow = exports.tableRowProps = exports.tableFakeRowProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.tableFakeRowProps = {
    gridColumns: {
        type: String,
        required: true
    },
    head: {
        type: Array,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: false,
        default: false
    },
    rowsCount: {
        type: Number,
        required: false,
        default: 1
    },
    showSelection: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.tableRowProps = {
    actions: {
        type: Array,
        required: false,
        default: () => []
    },
    gridColumns: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    row: {
        type: Object,
        required: true
    },
    selectedRows: {
        type: Array,
        required: false,
        default: () => []
    },
    showActions: {
        type: Boolean,
        required: false,
        default: false
    },
    showSelection: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useTableRow = (props, ctx) => {
    const selectedRows = composition_api_1.toRef(props, 'selectedRows');
    const isSelected = composition_api_1.computed(() => selectedRows.value.includes(props.row.id));
    const selected = composables_1.useSyncModel(selectedRows, ctx, 'selectedRows');
    const filteredActions = composition_api_1.computed(() => {
        return props.actions.filter(a => {
            return typeof a.guard !== 'function' || a.guard(props.row.data);
        });
    });
    return { filteredActions, isSelected, selected };
};
exports.useTableRow = useTableRow;
