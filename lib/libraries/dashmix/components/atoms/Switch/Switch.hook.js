"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwitches = exports.useSwitchesProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const Switch_config_1 = require("./Switch.config");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.useSwitchesProps = {
    ...composables_1.hasSizeProp,
    ...composables_1.canBeDisabledProp,
    options: {
        type: [Array, Object],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: false,
        default: contracts_1.DashmixTheme.Default
    },
    value: {
        type: [Boolean, String],
        required: true
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useSwitches = (props, ctx) => {
    const { emit } = ctx;
    /**
     * CSS class defining the control's color mode.
     */
    const themeClass = composables_1.useThemeClass(composition_api_1.toRef(props, 'theme'), Switch_config_1.dashmixSwitchTheme);
    /**
     * CSS class defining the control's size.
     */
    const sizeClass = composables_1.useSizeClass(composition_api_1.toRef(props, 'size'), Switch_config_1.dashmixSwitchSize);
    /**
     * Getter and setter for use in `v-model` binding of the `<input>`.
     */
    const model = composition_api_1.computed({
        get() {
            if (typeof props.value === 'boolean') {
                return props.value;
            }
            else {
                if (!Array.isArray(props.options)) {
                    // Wrong switch configuration - developer error - if value is a string, labels should be arrays
                    throw new Error('Wrong Switch configuration');
                }
                return props.value === props.options[1].value;
            }
        },
        set(value) {
            if (typeof props.value === 'boolean') {
                emit('onChange', value);
            }
            else {
                if (!Array.isArray(props.options)) {
                    // Wrong switch configuration - developer error - if value is a string, labels should be arrays
                    throw new Error('Wrong Switch configuration');
                }
                emit('onChange', value ? props.options[1].value : props.options[0].value);
            }
        }
    });
    return { themeClass: themeClass.themeClass, sizeClass, model };
};
exports.useSwitches = useSwitches;
