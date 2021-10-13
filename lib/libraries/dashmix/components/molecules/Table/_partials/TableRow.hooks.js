"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixTableRow = void 0;
const composition_api_1 = require("@vue/composition-api");
const Table_1 = require("../../../../../../abstract/components/Table");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDashmixTableRow(props, ctx) {
    const { filteredActions, isSelected, selected } = Table_1.useTableRow(props, ctx);
    const dropdownActions = composition_api_1.computed(() => filteredActions.value.map(action => {
        return {
            type: 'item',
            icon: action.icon,
            label: action.label,
            onClick: () => {
                ctx.emit('do', { id: props.row.id, action: action.action, data: props.row.data });
            },
            theme: action.theme
        };
    }));
    return { dropdownActions, isSelected, selected };
}
exports.useDashmixTableRow = useDashmixTableRow;
