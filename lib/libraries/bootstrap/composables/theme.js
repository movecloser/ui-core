"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemePropDefinition = void 0;
const contracts_1 = require("../contracts");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getThemePropDefinition = (defaultTheme = contracts_1.BootstrapTheme.Primary) => {
    return {
        type: String,
        required: false,
        default: defaultTheme
    };
};
exports.getThemePropDefinition = getThemePropDefinition;
