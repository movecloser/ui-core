"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractBreadcrumbsItemProps = exports.abstractBreadcrumbsProps = void 0;
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
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl> (edited)
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl> (original)
 */
exports.abstractBreadcrumbsItemProps = {
    active: {
        type: Boolean,
        required: false,
        default: true
    },
    isExternal: {
        type: Boolean,
        required: false,
        default: false
    },
    label: {
        type: String,
        required: true
    },
    target: {
        type: [String, Object],
        required: true
    }
};
