"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapImage = exports.bootstrapImageProps = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../abstract");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.bootstrapImageProps = abstract_1.abstractImageProps;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useBootstrapImage = (props) => {
    const { sizes, _srcset } = abstract_1.useSrcSet(props);
    /**
     * @see UseBootstrapImageProvides.component
     */
    const component = composition_api_1.computed(() => props.lazy ? bootstrap_vue_1.BImgLazy : bootstrap_vue_1.BImg);
    return { component, sizes, _srcset };
};
exports.useBootstrapImage = useBootstrapImage;
