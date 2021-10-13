"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixNavTabs = void 0;
const composition_api_1 = require("@vue/composition-api");
const NavTabs_hooks_1 = require("./NavTabs.hooks");
const _partials_1 = require("./_partials");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixNavTabs = composition_api_1.defineComponent({
    name: 'DashmixNavTabs',
    components: { DashmixNavTabsItem: _partials_1.DashmixNavTabsItem },
    props: NavTabs_hooks_1.dashmixNavTabsProps,
    emits: ['update:activeItem'],
    setup(props, ctx) {
        return NavTabs_hooks_1.useDashmixNavTabs(props, ctx);
    },
    template: `
    <div :class="{ 'nav-tabs-scrollable' : scrollable }">
    <ul class="nav nav-tabs nav-tabs-block"
        :class="{ disabled, 'nav-justified': justify, 'bg-light' : hasDefaultBackground }"
        role="tablist">
      <DashmixNavTabsItem v-for="(item, index) in items" :key="'tab-' + item.id +'-'+ index"
                          :index="index"
                          v-bind="item" :disabled="disabled ? disabled : item.disabled"
                          :active="isTabActive(item.id)" @click="activateTab(item.id)" />
    </ul>
    </div>
  `
});
