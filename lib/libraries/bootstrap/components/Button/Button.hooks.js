"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapButton = exports.bootstrapButtonProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../composables");
const contracts_1 = require("../../contracts");
const composables_2 = require("../../composables");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.bootstrapButtonProps = {
    ...composables_1.canBeDisabledProp,
    link: {
        type: Boolean,
        required: false,
        default: false
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    outline: {
        type: Boolean,
        required: false,
        default: false
    },
    size: {
        type: String,
        required: false,
        default: contracts_1.BootstrapSize.Normal
    },
    tag: {
        type: String,
        required: false,
        default: 'button'
    },
    theme: composables_2.getThemePropDefinition()
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useBootstrapButton = (props) => {
    const loadingClass = composition_api_1.computed(() => props.loading ? '--loading' : '');
    const variant = composition_api_1.computed(() => {
        if (props.link) {
            return 'link';
        }
        if (props.outline) {
            return `outline-${props.theme}`;
        }
        return props.theme;
    });
    return { loadingClass, variant };
};
exports.useBootstrapButton = useBootstrapButton;
