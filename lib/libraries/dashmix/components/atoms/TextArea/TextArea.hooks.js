"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashmixTextAreaProps = void 0;
const abstract_1 = require("../../../../../abstract");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixTextAreaProps = {
    ...abstract_1.getAbstractInputControlProps(),
    /**
     * Value for the `[rows]` attribute of the main `<textarea>` element.
     * @default 5
     */
    rows: {
        type: Number,
        required: false,
        default: 5
    }
};
