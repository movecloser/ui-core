"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapFormError = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapFormError = composition_api_1.defineComponent({
    name: 'BootstrapFormError',
    template: `
    <p class="form-error">
      <slot />
    </p>
  `
});
