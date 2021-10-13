"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixFilters = void 0;
const composition_api_1 = require("@vue/composition-api");
const atoms_1 = require("../../atoms");
const contracts_1 = require("../../../contracts");
const FilterBadge_1 = require("./partials/FilterBadge");
const Filters_hook_1 = require("./Filters.hook");
const Dropdown_1 = require("../Dropdown");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixFilters = composition_api_1.defineComponent({
    name: 'DashmixFilters',
    components: { FilterBadge: FilterBadge_1.FilterBadge, DashmixDropdown: Dropdown_1.DashmixDropdown, DashmixButton: atoms_1.DashmixButton },
    props: Filters_hook_1.useFiltersProps,
    emits: ['setQuery'],
    setup(props, ctx) {
        return {
            ...Filters_hook_1.useFilters(props, ctx),
            icons: atoms_1.DashmixIconName,
            buttonTheme: contracts_1.DashmixTheme
        };
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
});
