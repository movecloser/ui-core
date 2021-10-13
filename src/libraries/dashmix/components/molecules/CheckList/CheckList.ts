// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixCheckListProps } from './CheckList.contracts'
import { dashmixCheckListProps, useDashmixCheckList } from './CheckList.hooks'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixCheckList = defineComponent({
  name: 'DashmixCheckList',
  props: dashmixCheckListProps,
  emits: ['update:model'],

  setup (props: DashmixCheckListProps, ctx: SetupContext) {
    return useDashmixCheckList(props, ctx)
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
})
