"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixBreadcrumbs = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../../abstract");
const Icon_1 = require("../../atoms/Icon");
const Dropdown_1 = require("../Dropdown");
const BreadcrumbsItem_1 = require("./_partials/BreadcrumbsItem");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixBreadcrumbs = composition_api_1.defineComponent({
    name: 'DashmixBreadcrumbs',
    components: { DashmixBreadcrumbsItem: BreadcrumbsItem_1.DashmixBreadcrumbsItem, DashmixIcon: Icon_1.DashmixIcon, DashmixDropdown: Dropdown_1.DashmixDropdown },
    props: {
        ...abstract_1.abstractBreadcrumbsProps,
        root: {
            type: Object,
            required: true
        }
    },
    template: `
    <nav aria-label="breadcrumb" class="d-md-block" :class="{ 'd-none' : !showOnMobile }">
    <ol class="breadcrumb breadcrumb-alt push">
      <DashmixBreadcrumbsItem :label="root.label" :target="root.target" />
      <DashmixBreadcrumbsItem v-for="(b, i) in items" :key="'bread-'+i"
                              :active="i < items.length - 1" :label="b.label" :target="b.target" />
    </ol>
    </nav>
  `
});
