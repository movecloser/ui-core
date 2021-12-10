"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixPagination = void 0;
const composition_api_1 = require("@vue/composition-api");
const Button_1 = require("../../atoms/Button");
const Icon_1 = require("../../atoms/Icon");
const Select_1 = require("../../atoms/Select");
const Pagination_hooks_1 = require("./Pagination.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixPagination = composition_api_1.defineComponent({
    name: 'DashmixPagination',
    components: { DashmixButton: Button_1.DashmixButton, DashmixSelect: Select_1.DashmixSelect },
    props: Pagination_hooks_1.dashmixPaginationProps,
    emits: ['update:currentPage', 'update:perPage'],
    setup(props, ctx) {
        return { ...Pagination_hooks_1.useDashmixPagination(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <nav class="pagination-container">

    <slot name="default">
      <div class="left-group">
        <div class="page-counter">
          {{ _currentPage }} z {{ pagesTotal }}
        </div>

        <div>
          <DashmixButton theme="dark" variant="icon" :icon="DashmixIconName.ChevronLeftSolid"
                         class="mr-1 mr-lg-3"
                         @click="prevPage" :disabled="!canGoBack" />
          <DashmixButton theme="dark" variant="icon" :icon="DashmixIconName.ChevronRightSolid"
                         @click="nextPage" :disabled="!canGoFurther" />
        </div>

        <div class="divider" />

        <DashmixSelect :model.sync="_perPage" :options="perPageOptions" withDynamicPosition />
      </div>
    </slot>

    <slot name="right">
      <div class="right-group">
        Wszystkich wpisów:&nbsp;<b>{{ itemsTotal }}</b>
      </div>
    </slot>

    </nav>
  `
});
