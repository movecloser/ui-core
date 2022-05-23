"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapBreadcrumbs = void 0;
const composition_api_1 = require("@vue/composition-api");
const bootstrap_vue_1 = require("bootstrap-vue");
const Icon_1 = require("../Icon");
const Breadcrumbs_hooks_1 = require("./Breadcrumbs.hooks");
/**
 * @scopedSlot icon - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 * @scopedSlot label - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 *
 * @see https://bootstrap-vue.org/docs/components/breadcrumb
 *
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
      <BBreadcrumbItem v-for="(item, index) in items" :key="item.label + index"
                       :active="isLast(item)" :href="item.isExternal ? item.target : undefined"
                       :to="item.isExternal ? undefined : item.target">
        <!-- Icon -->
        <slot v-if="$scopedSlots.icon" name="icon" v-bind:item="item" />
        <BootstrapIcon v-else-if="item.icon" :name="item.icon" />
        
        <span v-if="typeof item.wcagTitle !== undefined && item.wcagTitle.length > 0" class="sr-only"> {{ item.wcagTitle }} </span>
        
        <!-- Label -->
        <slot v-if="$scopedSlots.label" name="label" v-bind:item="item" />
        <template v-else-if="item.label">{{ item.label }}</template>
      </BBreadcrumbItem>
    </BBreadcrumb>
  `
});
