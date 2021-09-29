"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateBase = void 0;
const vue_i18n_1 = require("vue-i18n");
const vue_router_1 = require("vue-router");
const config_1 = require("../config");
/**
 * Returns base configuration for every `Template` function.
 *
 * @param argTypes - `argTypes` for the _Storybook's Manager_.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const getTemplateBase = (argTypes) => ({
    i18n: new vue_i18n_1.default(config_1.i18nOptions),
    props: Object.keys(argTypes),
    router: new vue_router_1.default()
});
exports.getTemplateBase = getTemplateBase;
