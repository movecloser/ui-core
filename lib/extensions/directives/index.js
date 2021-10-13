"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDirectives = exports.directives = exports.focus = exports.closable = void 0;
const closable_1 = __importDefault(require("./closable"));
const focus_1 = __importDefault(require("./focus"));
var closable_2 = require("./closable");
Object.defineProperty(exports, "closable", { enumerable: true, get: function () { return __importDefault(closable_2).default; } });
var focus_2 = require("./focus");
Object.defineProperty(exports, "focus", { enumerable: true, get: function () { return __importDefault(focus_2).default; } });
exports.directives = { closable: closable_1.default, focus: focus_1.default };
/**
 * Registers all custom Vue directives.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const registerDirectives = (Vue) => {
    for (const [name, handler] of Object.entries(exports.directives)) {
        Vue.directive(name, handler);
    }
};
exports.registerDirectives = registerDirectives;
