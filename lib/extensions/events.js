"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeKey = exports.enterKey = void 0;
function enterKey(evt) {
    if (evt.keyCode === 13) {
        this.enterPressed();
    }
}
exports.enterKey = enterKey;
function escapeKey(evt) {
    if (evt.keyCode === 27) {
        this.escapePressed();
    }
}
exports.escapeKey = escapeKey;
