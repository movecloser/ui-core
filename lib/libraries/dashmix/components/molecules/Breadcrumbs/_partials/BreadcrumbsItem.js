"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixBreadcrumbsItem = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../../../abstract");
const Link_1 = require("../../../atoms/Link");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixBreadcrumbsItem = composition_api_1.defineComponent({
    name: 'DashmixBreadcrumbsItem',
    components: { DashmixLink: Link_1.DashmixLink },
    props: abstract_1.abstractBreadcrumbsItemProps,
    template: `
    <li class="breadcrumb-item">
    <DashmixLink :target="target" :disabled="!active">{{ label }}</DashmixLink>
    </li>
  `
});
