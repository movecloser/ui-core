// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixTheme } from '../../../../contracts'

import { DashmixButton, DashmixIconName, DashmixSwitch } from '../../../atoms'

import { useFilterEditPopup, useFilterEditPopupProps } from './FilterEditPopup.hook'
import { FilterEditPopupProps } from '../Filters.contracts'
import { FilterEditPopupDefinition } from './FilterEditPopupDefinition'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const FilterEditPopup = defineComponent({
  name: 'FilterEditPopup',
  components: { FilterEditPopupDefinition, DashmixSwitch, DashmixButton },
  props: useFilterEditPopupProps,
  emits: ['setValue'],

  setup (props: FilterEditPopupProps, ctx: SetupContext) {
    return {
      ...useFilterEditPopup(props, ctx),
      icons: DashmixIconName,
      colorTheme: DashmixTheme
    }
  },

  template: `
    <div class="filter_badge__dropdown" @click.stop>
    <div class="filter_badge__rows-container">
      <template v-for="(d, index) in definitions">
        <FilterEditPopupDefinition :config="config" :dictionaries="dictionaries" :definition="d"
                                   :index="index" :key="d.value + '-' +  index"
                                   :hints="hints"
                                   :loading="loading"
                                   @search="(q) => $emit('searchDict', q)"
                                   @setHint="(hint) => $emit('setHint', hint)"
                                   @deleteHint="(hint) => $emit('setHint', hint)"
                                   @onChange="(changed) => onDefinitionChange(changed, index)"
                                   @onRemove="() => onDefinitionRemove(index)" />
      </template>
    </div>

    <DashmixButton size="small" class="pl-0"
                   :icon="icons.PlusSolid" :theme="colorTheme.Info"
                   variant="icon"
                   :label="$t('filters.addNext')"
                   @click.native.stop="addClearDefinition" />

    <div v-if="definitions.length > 1" class="pt-2 d-inline-block w-100">
      <label class="conjunction-label mr-1">{{ $t('filters.conjunctionType') }}</label>
      <DashmixSwitch class="custom-control-inline" name="conjunction-type" :theme="colorTheme.Info"
                     :options="conjunctionOptions" :value="conjunction"
                     @onChange="setNewConjunction" />
    </div>

    <hr class="my-2" />
    <DashmixButton size="small" class="pl-0"
                   :icon="icons.CheckSolid" :theme="colorTheme.Success"
                   variant="icon"
                   :label="$t('filters.approved')"
                   @click.native.stop="$emit('close')" />
    </div>
  `
})
