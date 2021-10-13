"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = void 0;
const pl_json_1 = __importDefault(require("../locales/pl.json"));
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author VueI18n
 */
exports.i18n = {
    fallbackLocale: 'pl',
    locale: 'pl',
    messages: { pl: pl_json_1.default }
};
