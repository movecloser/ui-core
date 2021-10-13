// Copyright © 2021 Move Closer

import { defineComponent, getCurrentInstance, SetupContext } from '@vue/composition-api'

import { DashmixTheme } from '../../../../contracts'
import { SizeMap } from '../../../../../../composables'

import { DashmixTypeahead } from '../../Typeahead'
import {
  DashmixButton,
  DashmixDateTimePicker,
  DashmixIconName,
  DashmixInput,
  DashmixSelect
} from '../../../atoms'

import {
  useFilterEditPopupDefinition,
  useFilterEditPopupDefinitionProps
} from './FilterEditPopupDefinition.hook'
import { FilterEditPopupDefinitionProps } from '../Filters.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const FilterEditPopupDefinition = defineComponent({
  name: 'FilterEditPopupDefinition',
  components: {
    DashmixTypeahead,
    DashmixSelect,
    DashmixDateTimePicker,
    DashmixButton,
    DashmixInput
  },
  props: useFilterEditPopupDefinitionProps,
  emits: ['onChange', 'onRemove'],

  setup (props: FilterEditPopupDefinitionProps) {
    const internalInstance = getCurrentInstance()
    return {
      ...useFilterEditPopupDefinition(props, internalInstance),
      icons: DashmixIconName,
      btnTheme: DashmixTheme,
      sizes: SizeMap
    }
  },
  template: `
    <div class="filter_badge__row" :class="{ '--enumerable' : isEnumerable || isSearchable }">
    <DashmixSelect v-if="haveSelectOperator" name="Operator" :size="sizes.Small"
                   :options="operatorsOptions" :model.sync="definitionOperator" />

    <template v-if="isSearchable">
      <DashmixTypeahead name="Value"
                        :hints="dictionariesOptions()" :selected="selected()" :loading="loading"
                        :size="sizes.Small"
                        @selected="onSelect" @searched="onSearch" @deleted="onDelete"
                        @cleared="onClear"
                        :isMulti="false" :taggable="false" clearable />
    </template>

    <template v-else-if="isEnumerable">
      <DashmixSelect name="Value" :options="dictionariesOptions()" :model.sync="value"
                     :size="sizes.Small" searchable />
    </template>

    <template v-else-if="isDate">
      <DashmixDateTimePicker class="filter_badge__date-picker"
                             :placeholder="$t('filters.datePlaceholder')" name="filter-value"
                             :size="sizes.Small"
                             :model.sync="value" />
    </template>

    <template v-else>
      <DashmixInput :placeholder="$t('filters.placeholder')" name="filter-value" :size="sizes.Small"
                    :model.sync="value" />
    </template>
    <DashmixButton class="btn-sm" :size="sizes.Small" :theme="btnTheme.Danger" variant="icon"
                   :icon="icons.TrashSolid"
                   :disabled="index === 0" @click="onRemove" />
    </div>
  `
})
