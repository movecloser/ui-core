"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBadge = void 0;
const composition_api_1 = require("@vue/composition-api");
const contracts_1 = require("../../../../contracts");
const atoms_1 = require("../../../atoms");
const composables_1 = require("../../../../../../composables");
const ActionBadge_1 = require("../../ActionBadge");
const Dropdown_1 = require("../../Dropdown");
const FilterBadge_hook_1 = require("./FilterBadge.hook");
const Filters_helpers_1 = require("../Filters.helpers");
const FilterEditPopup_1 = require("./FilterEditPopup");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.FilterBadge = composition_api_1.defineComponent({
    name: 'FilterBadge',
    components: { FilterEditPopup: FilterEditPopup_1.FilterEditPopup, DashmixActionBadge: ActionBadge_1.DashmixActionBadge, DashmixDropdown: Dropdown_1.DashmixDropdown },
    props: FilterBadge_hook_1.filterBadgeProps,
    emits: ['onEdit', 'onRemove'],
    setup(props, ctx) {
        return {
            ...FilterBadge_hook_1.useFilterBadge(props, ctx),
            badgeTheme: contracts_1.DashmixTheme,
            badgeShape: atoms_1.DashmixBadgeShape,
            icons: atoms_1.DashmixIconName,
            translateOperatorToLabel: Filters_helpers_1.translateOperatorToLabel,
            sizes: composables_1.SizeMap
        };
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
            {{ $t(config.label) }}
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
});
