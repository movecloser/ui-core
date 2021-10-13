// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixButton, DashmixIconName } from '../../atoms'
import { DashmixTheme } from '../../../contracts'

import { FiltersProps } from './Filters.contracts'
import { FilterBadge } from './partials/FilterBadge'
import { useFilters, useFiltersProps } from './Filters.hook'
import { DashmixDropdown } from '../Dropdown'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */

export const DashmixFilters = defineComponent({
  name: 'DashmixFilters',
  components: { FilterBadge, DashmixDropdown, DashmixButton },
  props: useFiltersProps,
  emits: ['setQuery'],

  setup (props: FiltersProps, ctx: SetupContext) {
    return {
      ...useFilters(props, ctx),
      icons: DashmixIconName,
      buttonTheme: DashmixTheme
    }
  },

  template: `
    <div>
    <template v-if="shouldRender">
      <div class="d-flex align-items-center">
        <div class="btn-group">
          <DashmixDropdown
              :triggerTheme="buttonTheme.Dark" triggerVariant="icon" :icon="icons.FilterSolid"
              :label="!canRemoveAll ? $t('filters.add') : ''" :items="filtersItems()">
          </DashmixDropdown>

          <template v-if="canRemoveAll">
            <DashmixButton :theme="buttonTheme.Danger"
                           variant="icon"
                           :icon="icons.TrashSolid"
                           @click="clearFilters" />
          </template>
        </div>

        <div class=" pl-2 d-flex">
          <template v-for="(filter, name) in filters">
            <FilterBadge
                :isNew="isFromQuery(name)"
                :key="name"
                :loading="loading"
                :container="container"
                :config="config.groups[name]"
                :field="name"
                :value="filter"
                :dictionaries="dictionaries"
                @onRemove="onRemove"
                @onEdit="onEdit"
                @loadDict="(q) => loadDict(name, q)"
            />
          </template>
        </div>

      </div>
    </template>
    </div>
  `
})
