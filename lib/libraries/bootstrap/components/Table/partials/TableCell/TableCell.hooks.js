"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapTableCell = exports.bootstrapTableCellProps = void 0;
const vue_1 = __importDefault(require("vue"));
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
exports.bootstrapTableCellProps = {
    index: {
        type: Number,
        required: true
    },
    item: {
        type: Object,
        required: true
    },
    value: { required: true }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const useBootstrapTableCell = (props) => {
    /**
     * @see UseBootstrapTableCellProvides.shouldRenderComponent
     */
    const shouldRenderComponent = composition_api_1.computed(() => {
        const isVueComponent = (typeof props.value === 'function' ||
            props.value instanceof vue_1.default);
        const isVueComponentOptions = (typeof props.value === 'object' &&
            props.value !== null &&
            Object.prototype.hasOwnProperty.call(props.value, 'template'));
        return isVueComponent || isVueComponentOptions;
    });
    return { shouldRenderComponent };
};
exports.useBootstrapTableCell = useBootstrapTableCell;
