"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputTypeahead = exports.inputTypeaheadProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../../composables");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.inputTypeaheadProps = {
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    clearable: {
        type: Boolean,
        required: true,
        default: true
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    isMulti: {
        type: Boolean,
        required: false,
        default: true
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    model: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false,
        default: () => composables_1.SizeMap.Medium
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useInputTypeahead = (props, ctx) => {
    const value = composition_api_1.computed({
        get() {
            return props.model;
        },
        set(newValue) {
            ctx.emit('onInput', newValue);
        }
    });
    return { value };
};
exports.useInputTypeahead = useInputTypeahead;
