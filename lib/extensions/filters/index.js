"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFilters = exports.filters = exports.ucFirst = exports.trim = exports.stripHtml = void 0;
const strip_html_1 = __importDefault(require("./strip-html"));
const trim_1 = __importDefault(require("./trim"));
const uc_first_1 = __importDefault(require("./uc-first"));
var strip_html_2 = require("./strip-html");
Object.defineProperty(exports, "stripHtml", { enumerable: true, get: function () { return __importDefault(strip_html_2).default; } });
var trim_2 = require("./trim");
Object.defineProperty(exports, "trim", { enumerable: true, get: function () { return __importDefault(trim_2).default; } });
var uc_first_2 = require("./uc-first");
Object.defineProperty(exports, "ucFirst", { enumerable: true, get: function () { return __importDefault(uc_first_2).default; } });
exports.filters = { stripHtml: strip_html_1.default, trim: trim_1.default, ucFirst: uc_first_1.default };
/**
 * Registers all custom Vue filters.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const registerFilters = (Vue) => {
    for (const [name, filter] of Object.entries(exports.filters)) {
        Vue.filter(name, filter);
    }
};
exports.registerFilters = registerFilters;
