"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterEditPopup = void 0;
const composition_api_1 = require("@vue/composition-api");
const contracts_1 = require("../../../../contracts");
const atoms_1 = require("../../../atoms");
const FilterEditPopup_hook_1 = require("./FilterEditPopup.hook");
const FilterEditPopupDefinition_1 = require("./FilterEditPopupDefinition");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.FilterEditPopup = composition_api_1.defineComponent({
    name: 'FilterEditPopup',
    components: { FilterEditPopupDefinition: FilterEditPopupDefinition_1.FilterEditPopupDefinition, DashmixSwitch: atoms_1.DashmixSwitch, DashmixButton: atoms_1.DashmixButton },
    props: FilterEditPopup_hook_1.useFilterEditPopupProps,
    emits: ['setValue'],
    setup(props, ctx) {
        return {
            ...FilterEditPopup_hook_1.useFilterEditPopup(props, ctx),
            icons: atoms_1.DashmixIconName,
            colorTheme: contracts_1.DashmixTheme
        };
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
});
