"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSizeClass = exports.hasSizeProp = exports.getSizePropDefinition = void 0;
const composition_api_1 = require("@vue/composition-api");
const has_size_contracts_1 = require("./has-size.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getSizePropDefinition = (defaultSize = has_size_contracts_1.SizeMap.Medium) => {
    return {
        type: String,
        required: false,
        default: defaultSize
    };
};
exports.getSizePropDefinition = getSizePropDefinition;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.hasSizeProp = {
    size: exports.getSizePropDefinition()
};
/**
 * @param size - Component's `size` reactive reference.
 * @param sizeClassRegistry - registry that should be used
 *  to determine the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useSizeClass = (size, sizeClassRegistry) => {
    return composition_api_1.computed(() => {
        if (typeof sizeClassRegistry[size.value] !== 'string') {
            if (!Object.keys(sizeClassRegistry).length) {
                console.warn('useSizeClass(): Provided registry does NOT contain any definition. Used no class.');
            }
            console.warn(`useSizeClass(): Provided registry does NOT contain the given key.\nFalling back to the first key in the set, which is [${Object.keys(sizeClassRegistry)[0]}].`);
            return Object.values(sizeClassRegistry)[0];
        }
        return sizeClassRegistry[size.value];
    });
};
exports.useSizeClass = useSizeClass;
