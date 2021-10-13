"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapBreadcrumbs = void 0;
const composition_api_1 = require("@vue/composition-api");
const bootstrap_vue_1 = require("bootstrap-vue");
const Icon_1 = require("../Icon");
const Breadcrumbs_hooks_1 = require("./Breadcrumbs.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapBreadcrumbs = composition_api_1.defineComponent({
    name: 'BootstrapBreadcrumbs',
    components: { BBreadcrumb: bootstrap_vue_1.BBreadcrumb, BBreadcrumbItem: bootstrap_vue_1.BBreadcrumbItem, BootstrapIcon: Icon_1.BootstrapIcon },
    props: Breadcrumbs_hooks_1.bootstrapBreadcrumbsProps,
    setup(props) {
        const { isLast } = Breadcrumbs_hooks_1.useBootstrapBreadcrumbs(props);
        return { isLast };
    },
    template: `
    <BBreadcrumb>
    <BBreadcrumbItem v-for="item in items" :key="item.label"
                     :active="isLast(item)" :to="item.target">
      <BootstrapIcon v-if="item.icon" :name="item.icon" />
      {{ item.label }}
    </BBreadcrumbItem>
    </BBreadcrumb>
  `
});
