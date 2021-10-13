"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterEditPopupDefinition = void 0;
const composition_api_1 = require("@vue/composition-api");
const contracts_1 = require("../../../../contracts");
const composables_1 = require("../../../../../../composables");
const Typeahead_1 = require("../../Typeahead");
const atoms_1 = require("../../../atoms");
const FilterEditPopupDefinition_hook_1 = require("./FilterEditPopupDefinition.hook");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.FilterEditPopupDefinition = composition_api_1.defineComponent({
    name: 'FilterEditPopupDefinition',
    components: {
        DashmixTypeahead: Typeahead_1.DashmixTypeahead,
        DashmixSelect: atoms_1.DashmixSelect,
        DashmixDateTimePicker: atoms_1.DashmixDateTimePicker,
        DashmixButton: atoms_1.DashmixButton,
        DashmixInput: atoms_1.DashmixInput
    },
    props: FilterEditPopupDefinition_hook_1.useFilterEditPopupDefinitionProps,
    emits: ['onChange', 'onRemove'],
    setup(props) {
        const internalInstance = composition_api_1.getCurrentInstance();
        return {
            ...FilterEditPopupDefinition_hook_1.useFilterEditPopupDefinition(props, internalInstance),
            icons: atoms_1.DashmixIconName,
            btnTheme: contracts_1.DashmixTheme,
            sizes: composables_1.SizeMap
        };
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
});
