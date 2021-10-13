"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixTableSearchBar = exports.dashmixTableSearchBarProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.dashmixTableSearchBarProps = {
    /**
     * Actions performable on rows.
     */
    actions: {
        type: Array,
        required: false
    },
    /**
     * Determines whether there are any background processes currntly active.
     */
    isProcessing: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Search input placeholder.
     */
    searchPlaceholder: {
        type: String,
        required: false,
        default: ''
    },
    /**
     * Search input value.
     */
    searchValue: {
        type: String,
        required: false,
        default: ''
    },
    /**
     * Selected rows.
     */
    selected: {
        type: Array,
        required: false,
        default: () => []
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useDashmixTableSearchBar = (props, ctx) => {
    const confirmAction = composition_api_1.ref({});
    const showConfirmModal = composition_api_1.ref(false);
    const showFilterModal = composition_api_1.ref(false);
    const bulkActions = composition_api_1.computed(() => {
        return props.actions ? props.actions.filter(action => action.isBulkAction) : [];
    });
    const searchModel = composition_api_1.computed({
        get() {
            return props.searchValue;
        },
        set(value) {
            ctx.emit('search', value);
        }
    });
    return { bulkActions, confirmAction, searchModel, showConfirmModal, showFilterModal };
};
exports.useDashmixTableSearchBar = useDashmixTableSearchBar;
