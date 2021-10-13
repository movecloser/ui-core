"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionBadgeProps = void 0;
const composables_1 = require("../../../../../composables");
const atoms_1 = require("../../atoms");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.actionBadgeProps = {
    ...atoms_1.dashmixBadgeProps,
    icon: {
        type: String,
        required: true
    },
    buttonSize: {
        type: String,
        required: false,
        default: composables_1.SizeMap.Small
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    variant: {
        type: String,
        required: false,
        default: atoms_1.DashmixBadgeVariantMap.Default
    }
};
