"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const composition_api_1 = require("@vue/composition-api");
exports.ButtonGroup = composition_api_1.defineComponent({
    name: 'ButtonGroup',
    props: {
        direction: {
            type: String,
            required: false,
            defualt: 'horizontal'
        }
    },
    template: `
    <div class="btn-group">
    <slot />
    </div>
  `
});
