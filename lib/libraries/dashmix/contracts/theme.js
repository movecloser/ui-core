"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixValidationClassRegistry = exports.DashmixTheme = exports.DashmixSize = void 0;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
var DashmixSize;
(function (DashmixSize) {
    DashmixSize["Large"] = "lg";
    DashmixSize["Normal"] = "md";
    DashmixSize["Small"] = "sm";
})(DashmixSize = exports.DashmixSize || (exports.DashmixSize = {}));
/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
var DashmixTheme;
(function (DashmixTheme) {
    DashmixTheme["Default"] = "default";
    DashmixTheme["Danger"] = "danger";
    DashmixTheme["Dark"] = "dark";
    DashmixTheme["Info"] = "info";
    DashmixTheme["Light"] = "light";
    DashmixTheme["Primary"] = "primary";
    DashmixTheme["Success"] = "success";
    DashmixTheme["Warning"] = "warning";
})(DashmixTheme = exports.DashmixTheme || (exports.DashmixTheme = {}));
/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixValidationClassRegistry = {
    invalid: 'is-invalid',
    valid: 'is-valid'
};
