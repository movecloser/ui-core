"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixBox = exports.dashmixBoxProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Box_contracts_1 = require("./Box.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixBoxProps = {
    bodyClass: {
        type: String,
        required: false,
        default: ''
    },
    footerClass: {
        type: String,
        required: false,
        default: ''
    },
    footerMode: {
        type: String,
        required: false,
        default: () => Box_contracts_1.DashmixBoxModeMap.Clean
    },
    headerClass: {
        type: String,
        required: false,
        default: ''
    },
    headerMode: {
        type: String,
        required: false,
        default: () => Box_contracts_1.DashmixBoxModeMap.Clean
    },
    noBodyPadding: {
        type: Boolean,
        required: false,
        default: false
    },
    shadow: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDashmixBox(props, ctx) {
    const isFooterDivided = composition_api_1.computed(() => {
        return props.footerMode === Box_contracts_1.DashmixBoxModeMap.Divided;
    });
    const isHeaderDivided = composition_api_1.computed(() => {
        return props.headerMode === Box_contracts_1.DashmixBoxModeMap.Divided;
    });
    const bodyPaddingClass = composition_api_1.computed(() => {
        if (props.noBodyPadding) {
            return 'p-0';
        }
        const classes = [];
        if (isFooterDivided) {
            classes.push('block-content-full');
        }
        return classes.join(' ');
    });
    return { bodyPaddingClass, isFooterDivided, isHeaderDivided };
}
exports.useDashmixBox = useDashmixBox;
