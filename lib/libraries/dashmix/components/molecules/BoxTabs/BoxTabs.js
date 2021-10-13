"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixBoxTabs = void 0;
const composition_api_1 = require("@vue/composition-api");
const BoxTabs_hooks_1 = require("./BoxTabs.hooks");
const Box_1 = require("../../atoms/Box");
const NavTabs_1 = require("../NavTabs");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixBoxTabs = composition_api_1.defineComponent({
    name: 'DashmixBoxTabs',
    components: { DashmixBox: Box_1.DashmixBox, DashmixNavTabs: NavTabs_1.DashmixNavTabs },
    props: BoxTabs_hooks_1.dashmixBoxTabsProps,
    emits: ['update:active'],
    setup(props, ctx) {
        return BoxTabs_hooks_1.useDashmixBoxTabs(props, ctx);
    },
    template: `
    <div class="block">
    <div class="d-flex bg-light">
      <DashmixNavTabs class="flex-fill" :scrollable="scrollable" :active.sync="activeItem"
                      :items="tabs" :disabled="disabled" :justify="justifyTabs" />

      <div class="d-flex align-items-center px-3">
        <slot name="right"></slot>
      </div>
    </div>

    <div class="block-content"
         :class="{ 'block-content-full': !this.$slots.footer || isFooterDivided, 'p-0': noBodyPadding }">
      <template v-for="(item, i) in items">
        <slot v-bind="{ item: item, tabId }">
          <component v-show="item.tab.id === activeItem" :key="tabId  + '-' + i"
                     :is="item.component || 'p'" v-bind="item.props">
            {{ !item.component ? 'Component to render not provided!' : null }}
          </component>
        </slot>
      </template>
    </div>

    <div v-if="this.$slots.footer" class="block-content block-content-full block-content-sm"
         :class="[{'bg-body-light': isFooterDivided}, footerClass]">
      <slot name="footer"></slot>
    </div>
    </div>
  `
});
