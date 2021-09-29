"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const storybook_1 = require("../../storybook");
const Pagination_1 = require("./Pagination");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Pagination',
    component: Pagination_1.BootstrapPagination
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapPagination: Pagination_1.BootstrapPagination }, data() {
        return {
            currentPage: 1
        };
    }, methods: {
        onChange(currentPage) {
            // @ts-expect-error - Correct TS annotation would require too much effort.
            this.currentPage = currentPage;
        }
    }, template: `
    <div>
      <code class="small">:model.sync</code>
      <BootstrapPagination v-bind="$props" :model.sync="currentPage" />

      <code class="small">:model & @update:model</code>
      <BootstrapPagination v-bind="$props" :model="currentPage" @update:model="onChange" />

      <hr>
      <p>Current page: <code>{{ currentPage }}</code></p>
    </div>
  ` }));
exports.Pagination = Template.bind({});
exports.Pagination.args = {
    perPage: 10,
    totalRows: 100
};
