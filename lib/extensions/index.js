"use strict";
// Copyright © 2021 Move Closer
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UICoreExtensions = void 0;
const directives_1 = require("./directives");
const filters_1 = require("./filters");
__exportStar(require("./directives"), exports);
__exportStar(require("./filters"), exports);
/**
 * Register all Vue extensions.
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.UICoreExtensions = {
    // TODO: Add config to allow to register only chosen extension
    install(_Vue) {
        directives_1.registerDirectives(_Vue);
        filters_1.registerFilters(_Vue);
    }
};
