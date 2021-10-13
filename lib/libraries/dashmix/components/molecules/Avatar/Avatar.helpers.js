"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHSLAColorFromString = exports.getAbbreviation = void 0;
/**
 * @author Packhelp
 */
const getAbbreviation = (text) => {
    return text
        .trim()
        .split(' ')
        .reduce((previousValue, currentValue, currentIndex, array) => {
        const firstLetter = currentValue.substring(0, array.length === 1 ? 2 : 1);
        if (currentIndex === 0 || currentIndex === array.length - 1) {
            return `${previousValue}${firstLetter}`;
        }
        return previousValue;
    }, '');
};
exports.getAbbreviation = getAbbreviation;
/**
 * @author Packhelp
 */
const getHSLAColorFromString = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    const s = (hash % 20) + 70;
    const l = (hash % 20) + 45;
    return `hsla(${h}, ${s}%, ${l}%, 0.8)`;
};
exports.getHSLAColorFromString = getHSLAColorFromString;
