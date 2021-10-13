"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixCheckList = void 0;
const composition_api_1 = require("@vue/composition-api");
const CheckList_hooks_1 = require("./CheckList.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixCheckList = composition_api_1.defineComponent({
    name: 'DashmixCheckList',
    props: CheckList_hooks_1.dashmixCheckListProps,
    emits: ['update:model'],
    setup(props, ctx) {
        return CheckList_hooks_1.useDashmixCheckList(props, ctx);
    },
    template: `
    <div>
    <div class="custom-control" :class="['custom-' + type, sizeClass, themeClass]"
         v-for="(o, i) in options" :key="getFieldId(i)">
      <input class="custom-control-input" :class="[validationClass]"
             :name="name" :id="getFieldId(i)" v-model="checked" :value="o.value"
             v-bind="{ disabled, readonly, type: checkType }" />
      <label class="custom-control-label" :for="getFieldId(i)">{{ o.label }}</label>
    </div>
    </div>
  `
});
