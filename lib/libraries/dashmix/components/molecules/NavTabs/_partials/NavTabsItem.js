"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixNavTabsItem = void 0;
const composition_api_1 = require("@vue/composition-api");
const NavTabsItem_hooks_1 = require("./NavTabsItem.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixNavTabsItem = composition_api_1.defineComponent({
    name: 'DashmixNavTabsItem',
    props: NavTabsItem_hooks_1.dashmixNavTabsItemProps,
    emits: ['click'],
    setup(props, ctx) {
        return NavTabsItem_hooks_1.useDashmixNavTabsItem(props, ctx);
    },
    template: `
    <li class="nav-item" v-on=" !isSimpleTab ? {click: onClick} : null">
    <a v-if="isSimpleTab" class="nav-link" :class="{ active, disabled }" href="#"
       @click.prevent="onClick">
      {{ label }}
    </a>
    <component v-else class="nav-link" :is="label" v-bind="props" :isActive="active" />
    </li>
  `
});
