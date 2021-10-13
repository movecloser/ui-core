"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTextArea = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const TextArea_hooks_1 = require("./TextArea.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixTextArea = composition_api_1.defineComponent({
    name: 'DashmixTextArea',
    props: TextArea_hooks_1.dashmixTextAreaProps,
    setup(props, ctx) {
        const value = composables_1.useSyncModel(composition_api_1.toRef(props, 'model'), ctx);
        return { value };
    },
    template: `
    <textarea class='form-control' v-model="value" v-bind="$props" />
  `
});
