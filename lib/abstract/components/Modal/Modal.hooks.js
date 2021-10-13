"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.abstractModalProps = void 0;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.abstractModalProps = {
    closable: {
        type: Boolean,
        required: false,
        default: true
    },
    open: {
        type: Boolean,
        required: true,
        default: false
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useModal = (props, ctx) => {
    const { emit } = ctx;
    /**
     * Emits the `@close` event to the parent component.
     */
    const close = () => {
        emit('close');
    };
    return { close };
};
exports.useModal = useModal;
