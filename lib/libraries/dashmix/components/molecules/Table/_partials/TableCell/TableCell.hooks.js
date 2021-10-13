"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixTableCell = exports.dashmixTableCellProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
exports.dashmixTableCellProps = {
    className: {
        type: String,
        required: false,
        default: ''
    },
    span: {
        type: String,
        required: false,
        default: ''
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixTableCell = (props) => {
    /**
     * Value for the `grid-column-end` CSS declaration.
     */
    const gridColumnEnd = composition_api_1.computed(() => `span ${props.span}`);
    return { gridColumnEnd };
};
exports.useDashmixTableCell = useDashmixTableCell;
