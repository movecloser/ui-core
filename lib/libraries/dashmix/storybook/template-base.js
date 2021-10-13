"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateBase = void 0;
const vue_i18n_1 = __importDefault(require("vue-i18n"));
const vue_router_1 = __importDefault(require("vue-router"));
const i18n_1 = require("../config/i18n");
/**
 * Returns base configuration for every `Template` function.
 *
 * @param argTypes - `argTypes` for the _Storybook's Manager_.
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const getTemplateBase = (argTypes) => ({
    i18n: new vue_i18n_1.default(i18n_1.i18n),
    props: Object.keys(argTypes),
    router: new vue_router_1.default()
});
exports.getTemplateBase = getTemplateBase;
