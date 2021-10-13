"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixIcon = exports.dashmixIconProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const Icon_config_1 = require("./Icon.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixIconProps = {
    /**
     * The name (identifier) of the icon that is to be displayed.
     */
    icon: {
        type: String,
        required: true
    },
    /**
     * The icon's size.
     */
    size: composables_1.getSizePropDefinition(composables_1.SizeMap.Small),
    /**
     * Makes icon spin
     */
    spin: {
        type: Boolean,
        required: false,
        default: false
    },
    /**
     * Makes icon pulse (spin with only 8 frames)
     */
    pulse: {
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
const useDashmixIcon = (props) => {
    const sizeClass = composables_1.useSizeClass(composition_api_1.toRef(props, 'size'), Icon_config_1.dashmixIconSizeRegistry);
    const additionalClasses = composition_api_1.computed(() => {
        return (props.spin ? ' fa-spin' : '') +
            (props.pulse ? ' fa-pulse' : '');
    });
    const iconClass = composition_api_1.computed(() => {
        // If the passed-in icon doesn't exist in the registry, return the `icon` prop as-is.
        if (!Object.prototype.hasOwnProperty.call(Icon_config_1.dashmixIconClassRegistry, props.icon) ||
            typeof Icon_config_1.dashmixIconClassRegistry[props.icon] !== 'string') {
            console.warn(`useDashmixIcon()->iconClass(): There's no entry for the [${props.icon}] icon name in the [dashmixIconClassRegistry]. Returning the [icon] prop as-is ([${props.icon}]).`);
            return props.icon + additionalClasses.value;
        }
        return Icon_config_1.dashmixIconClassRegistry[props.icon] + additionalClasses.value;
    });
    return { iconClass, sizeClass };
};
exports.useDashmixIcon = useDashmixIcon;
