"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixPagination = exports.dashmixPaginationProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Pagination_config_1 = require("./Pagination.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixPaginationProps = {
    /**
     * Index of the currently-active page.
     */
    currentPage: {
        type: Number,
        required: true
    },
    /**
     * Total number (sum) of the items in the given collection.
     */
    itemsTotal: {
        type: Number,
        required: true
    },
    /**
     * Number of items per each page.
     */
    perPage: {
        type: Number,
        required: false,
        default: 25
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixPagination = (props, ctx) => {
    // Extract the emit function.
    const { emit } = ctx;
    /**
     * Synced reference to the `currentPage` prop.
     */
    const _currentPage = composition_api_1.computed({
        get() {
            return props.currentPage;
        },
        set(value) {
            emit('update:currentPage', value);
        }
    });
    /**
     * Synced reference to the `perPage` prop.
     */
    const _perPage = composition_api_1.computed({
        get() {
            return props.perPage;
        },
        set(value) {
            emit('update:perPage', value);
        }
    });
    /**
     * Total number of pages.
     */
    const pagesTotal = composition_api_1.computed(() => {
        return Math.ceil(props.itemsTotal / _perPage.value);
    });
    /**
     * Determines whether User can go to the next page.
     */
    const canGoBack = composition_api_1.computed(() => {
        return _currentPage.value > 1;
    });
    /**
     * Determines whether User can go to the next page.
     */
    const canGoFurther = composition_api_1.computed(() => {
        return pagesTotal.value > _currentPage.value;
    });
    /**
     * Proceeds to the next page.
     */
    const nextPage = () => {
        if (canGoFurther) {
            _currentPage.value++;
        }
    };
    /**
     * Returns to the previous page.
     */
    const prevPage = () => {
        if (canGoBack) {
            _currentPage.value--;
        }
    };
    return {
        _currentPage,
        _perPage,
        canGoBack,
        canGoFurther,
        nextPage,
        pagesTotal,
        perPageOptions: Pagination_config_1.perPageOptions,
        prevPage
    };
};
exports.useDashmixPagination = useDashmixPagination;
