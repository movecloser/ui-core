"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixModal = exports.dashmixModalProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const Modal_config_1 = require("./Modal.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixModalProps = {
    ...composables_1.hasSizeProp,
    contentClass: {
        type: String,
        required: false,
        default: ''
    },
    isOpen: {
        type: Boolean,
        required: false,
        default: false
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixModal = (props, ctx) => {
    const close = () => {
        ctx.emit('close');
    };
    const sizeClass = composables_1.useSizeClass(composition_api_1.toRef(props, 'size'), Modal_config_1.modalSizeRegistry);
    return { close, sizeClass };
};
exports.useDashmixModal = useDashmixModal;
