"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeClass = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @param theme - Component's `theme` reactive reference.
 * @param themeClassRegistry - registry with class-theme definitions.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useThemeClass = (theme, themeClassRegistry) => {
    const themeClass = composition_api_1.computed(() => {
        if (typeof themeClassRegistry[theme.value] !== 'string') {
            if (!Object.keys(themeClassRegistry).length) {
                console.warn('useThemeClass(): Provided registry does NOT contain any definition. Used no class.');
            }
            console.warn(`useThemeClass(): Provided registry does NOT contain the given key.\nFalling back to the first key in the set, which is [${Object.keys(themeClassRegistry)[0]}].`);
            return Object.values(themeClassRegistry)[0];
        }
        return themeClassRegistry[theme.value];
    });
    return { themeClass };
};
exports.useThemeClass = useThemeClass;
