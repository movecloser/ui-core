"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLink = exports.abstractLinkProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
const Link_contracts_1 = require("./Link.contracts");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.abstractLinkProps = {
    ...composables_1.canBeDisabledProp,
    link: {
        type: Object,
        required: true
    },
    noFollow: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl> (edited)
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl> (edited)
 */
const useLink = (props, internalInstance) => {
    if (internalInstance === null) {
        throw new Error('useLink(): FATAL ERROR! Failed to resolve the component instance!');
    }
    const followedDomains = composition_api_1.inject(Link_contracts_1.INJECT_FOLLOWED_DOMAINS_KEY, []);
    const { label, newTab, target, title } = props.link;
    const { proxy } = internalInstance;
    const _title = composition_api_1.computed(() => {
        if (typeof props.link.newTab === 'undefined' || !props.link.newTab) {
            return title !== null && title !== void 0 ? title : '';
        }
        if (typeof title === 'undefined' || !title.length) {
            return String(proxy.$t('_.link-title'));
        }
        return `${proxy.$t('_.link-title')}: ${title}`;
    });
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
    const hasWcagTitle = composition_api_1.computed(() => {
        if (typeof props.link.wcagTitle === 'undefined') {
            return false;
        }
        return props.link.wcagTitle.length > 0;
    });
    const isExternal = composition_api_1.computed(() => {
        const toCheck = typeof target !== 'string' ? `${target.path}` : target;
        return props.link.isExternal ||
            toCheck.toLowerCase().startsWith('http://') ||
            toCheck.toLowerCase().startsWith('https://');
    });
    const isDomainFollowed = composition_api_1.computed(() => {
        const toCheck = typeof target !== 'string' ? `${target.path}` : target;
        if (followedDomains.length === 0) {
            return true;
        }
        for (const domain of followedDomains) {
            if (toCheck.match(domain)) {
                return true;
            }
        }
        return false;
    });
    const withNoFollow = composition_api_1.computed(() => {
        if (typeof props.noFollow === 'undefined') {
            return false;
        }
        return props.noFollow;
    });
    return {
        aTarget,
        hasCorrectTarget,
        hasWcagTitle,
        isDomainFollowed,
        isExternal,
        label,
        target,
        title: _title,
        withNoFollow
    };
};
exports.useLink = useLink;
