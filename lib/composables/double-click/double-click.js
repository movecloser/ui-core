"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDoubleClick = exports.doubleClickProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const defaultPeriod = 600;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.doubleClickProps = {
    /**
     * Specify delay between clicks to not cancel them.
     */
    clickPeriod: {
        type: Number,
        required: false,
        default: defaultPeriod
    },
    /**
     * Determine of double click should be considered.
     */
    doubleClick: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDoubleClick(onDouble, turnedOn, clickPeriod = defaultPeriod) {
    const clicksCount = composition_api_1.ref(0);
    const resetClicks = () => {
        clicksCount.value = 0;
    };
    const handlePartialClick = () => {
        clicksCount.value++;
        setTimeout(() => resetClicks(), clickPeriod);
    };
    const handleClick = () => {
        turnedOn ? handlePartialClick() : onDouble();
    };
    const isPendingClick = composition_api_1.computed(() => {
        return clicksCount.value > 0;
    });
    composition_api_1.watch(clicksCount, clicks => {
        if (clicks === 2) {
            onDouble();
        }
    });
    return { handleClick, isPendingClick };
}
exports.useDoubleClick = useDoubleClick;
