"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixAvatar = void 0;
const composition_api_1 = require("@vue/composition-api");
const Avatar_hooks_1 = require("./Avatar.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixAvatar = composition_api_1.defineComponent({
    name: 'DashmixAvatar',
    props: Avatar_hooks_1.avatarProps,
    setup: (props) => {
        return Avatar_hooks_1.useAvatar(props);
    },
    template: `
    <figure class="avatar" :class="sizeClass" :alt="person" :title="person">
    <img class="img-avatar alt-hidden" :class="sizeClass" :src="source" :alt="person"
         v-if="source" />
    <figcaption class="img-avatar" :class="sizeClass" :style="{backgroundColor: color}" v-else>
      {{ caption }}
    </figcaption>
    </figure>
  `
});
