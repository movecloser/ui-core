"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixBadge = exports.dashmixBadgeProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const contracts_1 = require("../../../contracts");
const composables_1 = require("../../../../../composables");
const Badge_contracts_1 = require("./Badge.contracts");
const Badge_config_1 = require("./Badge.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixBadgeProps = {
    /**
     * Badge's label (text content).
     */
    label: {
        type: String,
        required: false,
        default: ''
    },
    /**
     * Badge's shape.
     */
    shape: {
        type: String,
        required: false,
        default: Badge_contracts_1.DashmixBadgeShape.Pill
    },
    /**
     * Badge's theme (style).
     */
    theme: {
        type: String,
        required: false,
        default: contracts_1.DashmixTheme.Default
    },
    /**
     * Badge's variant (style variant).
     */
    variant: {
        type: String,
        required: false,
        default: Badge_contracts_1.DashmixBadgeVariantMap.Default
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixBadge = (props) => {
    const shapeClass = composables_1.useThemeClass(composition_api_1.toRef(props, 'shape'), Badge_config_1.dashmixBadgeShapeRegistry);
    const themePart = composables_1.useThemeClass(composition_api_1.toRef(props, 'theme'), Badge_config_1.dashmixBadgeThemeRegistry);
    const variantPart = composables_1.useThemeClass(composition_api_1.toRef(props, 'variant'), Badge_config_1.dashmixBadgeVariantRegistry);
    const styleClass = composition_api_1.computed(() => `badge${variantPart.themeClass.value}${themePart.themeClass.value}`);
    return { shapeClass: shapeClass.themeClass, styleClass };
};
exports.useDashmixBadge = useDashmixBadge;
