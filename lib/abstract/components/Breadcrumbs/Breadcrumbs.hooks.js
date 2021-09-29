"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractBreadcrumbsProps = void 0;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.abstractBreadcrumbsProps = {
    items: {
        type: Array,
        required: true
    },
    showOnMobile: {
        type: Boolean,
        required: false,
        default: false
    }
};
