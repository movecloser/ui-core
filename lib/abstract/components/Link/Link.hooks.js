"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLink = exports.abstractLinkProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.abstractLinkProps = {
    ...composables_1.canBeDisabledProp,
    link: {
        type: Object,
        required: true
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useLink = (props) => {
    const { label, newTab, target } = props.link;
    const aTarget = composition_api_1.computed(() => {
        return newTab ? '_blank' : '_self';
    });
    const hasCorrectTarget = composition_api_1.computed(() => {
        if (typeof target === 'undefined') {
            return false;
        }
        if (typeof target === 'object' && target === null) {
            return false;
        }
        // noinspection RedundantIfStatementJS
        if (typeof target === 'string' && target.length === 0) {
            return false;
        }
        return true;
    });
    const isExternal = composition_api_1.computed(() => {
        const toCheck = typeof target !== 'string' ? `${target.path}` : target;
        return props.link.isExternal ||
            toCheck.toLowerCase().startsWith('http://') ||
            toCheck.toLowerCase().startsWith('https://');
    });
    return { aTarget, hasCorrectTarget, isExternal, label, target };
};
exports.useLink = useLink;
