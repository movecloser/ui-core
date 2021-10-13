"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixDropdownDivider = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixDropdownDivider = composition_api_1.defineComponent({
    name: 'DropdownDivider',
    template: `
    <div role="separator" class="dropdown-divider" />
  `
});
