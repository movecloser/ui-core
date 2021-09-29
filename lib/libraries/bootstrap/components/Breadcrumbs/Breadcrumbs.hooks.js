"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapBreadcrumbs = exports.bootstrapBreadcrumbsProps = void 0;
const abstract_1 = require("../../../../abstract");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.bootstrapBreadcrumbsProps = Object.assign(Object.assign({}, abstract_1.abstractBreadcrumbsProps), { items: {
        type: Array,
        required: true
    } });
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useBootstrapBreadcrumbs = (props) => {
    /**
     * @see UseBootstrapBreadcrumbsProvides.isLast
     */
    const isLast = (item) => {
        return props.items.indexOf(item) === props.items.length - 1;
    };
    return { isLast };
};
exports.useBootstrapBreadcrumbs = useBootstrapBreadcrumbs;
