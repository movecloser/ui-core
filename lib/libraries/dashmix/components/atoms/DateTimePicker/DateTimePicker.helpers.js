"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.disabledBeforeToday = exports.disabledAfterToday = void 0;
/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
function disabledAfterToday(date) {
    const today = new Date();
    return date > today;
}
exports.disabledAfterToday = disabledAfterToday;
function disabledBeforeToday(date) {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return date < today;
}
exports.disabledBeforeToday = disabledBeforeToday;
