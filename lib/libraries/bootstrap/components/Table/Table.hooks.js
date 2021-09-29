"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapTable = exports.bootstrapTableProps = void 0;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
exports.bootstrapTableProps = {
    fields: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const useBootstrapTable = () => {
    /**
     * @see UseBootstrapTableProvides.composeSlotName
     */
    const composeSlotName = (field) => `cell(${field.key})`;
    return { composeSlotName };
};
exports.useBootstrapTable = useBootstrapTable;
