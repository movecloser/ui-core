"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixInputProps = void 0;
const abstract_1 = require("../../../../../abstract");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixInputProps = {
    ...abstract_1.getAbstractInputControlProps(),
    /**
     * Value for the `[type]` attribute.
     */
    type: {
        type: String,
        required: false,
        default: 'text'
    }
};
