"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapInputProps = void 0;
const abstract_1 = require("../../../../abstract");
const Input_contracts_1 = require("./Input.contracts");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.bootstrapInputProps = {
    ...abstract_1.getAbstractInputControlProps(),
    /**
     * The name of the icon that is to be prepended to the `<input>`.
     */
    icon: {
        type: String,
        required: false
    },
    /**
     * Content for the `<label>` element.
     */
    label: {
        type: String,
        required: false
    },
    /**
     * Value for the `[type]` attribute.
     */
    type: {
        type: String,
        required: false,
        default: Input_contracts_1.BootstrapInputType.Text
    }
};
