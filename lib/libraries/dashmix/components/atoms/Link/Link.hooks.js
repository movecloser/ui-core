"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLink = exports.dashmixLinkProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixLinkProps = {
    ...composables_1.canBeDisabledProp,
    external: {
        type: Boolean,
        required: false,
        default: false
    },
    newTab: {
        type: Boolean,
        required: false,
        default: false
    },
    target: {
        type: [String, Object],
        required: true
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useLink(props, ctx) {
    const { disabled, external, newTab, target } = composition_api_1.toRefs(props);
    const aTarget = composition_api_1.computed(() => {
        return newTab.value ? '_blank' : '_self';
    });
    const isExternal = composition_api_1.computed(() => {
        return typeof target.value === 'string' && external.value;
    });
    const onClick = () => {
        if (!disabled.value) {
            ctx.emit('click');
        }
    };
    return { aTarget, isExternal, onClick };
}
exports.useLink = useLink;
