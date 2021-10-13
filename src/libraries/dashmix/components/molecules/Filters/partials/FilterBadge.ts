// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixTheme } from '../../../../contracts'
import { DashmixBadgeShape, DashmixIconName } from '../../../atoms'
import { SizeMap } from '../../../../../../composables'

import { DashmixActionBadge } from '../../ActionBadge'
import { DashmixDropdown } from '../../Dropdown'

import { FilterBadgeProps } from '../Filters.contracts'
import { filterBadgeProps, useFilterBadge } from './FilterBadge.hook'
import { translateOperatorToLabel } from '../Filters.helpers'
import { FilterEditPopup } from './FilterEditPopup'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const FilterBadge = defineComponent({
  name: 'FilterBadge',
  components: { FilterEditPopup, DashmixActionBadge, DashmixDropdown },
  props: filterBadgeProps,
  emits: ['onEdit', 'onRemove'],

  setup (props: FilterBadgeProps, ctx: SetupContext) {
    return {
      ...useFilterBadge(props, ctx),
      badgeTheme: DashmixTheme,
      badgeShape: DashmixBadgeShape,
      icons: DashmixIconName,
      translateOperatorToLabel,
      sizes: SizeMap
    }
  },

  template: `
    <div class="mr-2">
    <DashmixDropdown :openOnMount="isNew">
      <template v-slot:trigger="{open, close, isOpen}">
        <DashmixActionBadge
            class="filter_badge"
            :shape="badgeShape.Rectangle" :theme="isOpen ? badgeTheme.Warning : badgeTheme.Info"
            variant="alt"
            :icon="isOpen ? icons.CheckSolid : icons.TimesSolid"
            @clicked="() => onBadgeClick(close, isOpen)"
            @click.native="() => toggleEditMode(open, close, isOpen)"
        >
          <template>
            {{ config.label }}
            <template v-for="filter in resolvedParams">
              <template v-if="'conjunction' in filter">
                {{ $t('conjunction.' + filter.conjunction) }}
              </template>
              {{ $t(translateOperatorToLabel(filter.operator, config.type)) }}&nbsp;&nbsp;
              <strong>
                <template v-if="toPrint(filter).value">
                  {{ filter.value ? $t(toPrint(filter).value) : $t('filters.notSet') }}
                </template>&nbsp;&nbsp;
              </strong>
            </template>
          </template>
        </DashmixActionBadge>
      </template>

      <template v-slot:default="{ close, isOpen }">
        <FilterEditPopup
            :value="copiedValue" :config="config" :dictionaries="dictionaries" :loading="loading"
            :hints="hints"
            @setHint="setHint" @deleteHint="deleteHint"
            @searchDict="(q) => $emit('loadDict', q)"
            @setValue="setValue" @close="() => onBadgeClick(close, isOpen)" />
      </template>
    </DashmixDropdown>
    </div>
  `
})
