"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTableSearchBar = void 0;
const composition_api_1 = require("@vue/composition-api");
const Box_1 = require("../../atoms/Box");
const Button_1 = require("../../atoms/Button");
const Icon_1 = require("../../atoms/Icon");
const Input_1 = require("../../atoms/Input");
const Modal_1 = require("../Modal");
const Select_1 = require("../../atoms/Select");
const TableSearchBar_hooks_1 = require("./TableSearchBar.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixTableSearchBar = composition_api_1.defineComponent({
    name: 'DashmixTableSearchBar',
    components: { DashmixBox: Box_1.DashmixBox, DashmixButton: Button_1.DashmixButton, DashmixIcon: Icon_1.DashmixIcon, DashmixInput: Input_1.DashmixInput, DashmixModal: Modal_1.DashmixModal, DashmixSelect: Select_1.DashmixSelect },
    props: TableSearchBar_hooks_1.dashmixTableSearchBarProps,
    setup(props, ctx) {
        return { ...TableSearchBar_hooks_1.useDashmixTableSearchBar(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    emits: ['bulk'],
    template: `
    <div class="table-filter-bar row px-2">

    <div class="col-12 col-md-4 col-lg-3">
      <DashmixInput type="search" :model.sync="searchModel" :placeholder="searchPlaceholder"
                    name="tableSearchInput">
        <template v-slot:prependText>
          <DashmixIcon :icon="DashmixIconName.SearchSolid" />
        </template>
      </DashmixInput>
    </div>

    <div class="col-12 col-md-4 col-lg-6 pl-0 mt-3 mt-md-0">
      <slot />
    </div>

    <div class="col-12 col-md-4 col-lg-3 mt-3 mt-md-0 d-none d-md-block">
      <DashmixSelect v-if="selected.length > 0" :model="null" :options="bulkActions"
                     :placeholder="'Zmień zaznaczone (' + selected.length + ')'" :searchable="false"
                     @option:selected="action => $emit('bulk', action.action, selected)"
                     :loading="isProcessing" />
    </div>
    </div>
  `
});
