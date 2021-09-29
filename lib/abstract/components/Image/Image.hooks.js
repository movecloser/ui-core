"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSrcSet = exports.abstractImageProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.abstractImageProps = {
    alt: {
        type: String,
        required: false,
        default: ''
    },
    lazy: {
        type: Boolean,
        required: false,
        default: true
    },
    src: {
        type: String,
        required: true
    },
    srcset: {
        type: Object,
        required: false
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useSrcSet = (props) => {
    if (typeof props.srcset === 'undefined') {
        return { _srcset: undefined, sizes: undefined };
    }
    /**
     * @see UseSrcSetProvides.sizes
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
     */
    const sizes = composition_api_1.computed(() => {
        return Object.keys(props.srcset)
            .map((width, index, arr) => {
            return index < arr.length - 1
                ? `(max-width: ${+width * 1.4}px) ${width}px`
                : `${width}px`;
        })
            .join(', ');
    });
    /**
     * @see UseSrcSetProvides._srcset
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset
     */
    const _srcset = composition_api_1.computed(() => {
        return Object.entries(props.srcset)
            .map(([width, src]) => `${src} ${width}w`)
            .join(', ');
    });
    return { sizes, _srcset };
};
exports.useSrcSet = useSrcSet;
