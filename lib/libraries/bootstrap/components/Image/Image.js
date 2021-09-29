"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapImage = void 0;
const composition_api_1 = require("@vue/composition-api");
const Image_hooks_1 = require("./Image.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapImage = composition_api_1.defineComponent({
    name: 'BootstrapImage',
    props: Image_hooks_1.bootstrapImageProps,
    setup(props) {
        const { component, sizes, _srcset } = Image_hooks_1.useBootstrapImage(props);
        return { component, sizes, _srcset };
    },
    template: '<component :is="component" v-bind="{ alt, sizes, src }" :srcset="_srcset" />'
});
