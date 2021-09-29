"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Basic = void 0;
const faker = require("faker");
const composables_1 = require("../../../../composables");
const storybook_1 = require("../../storybook");
const Select_1 = require("./Select");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Forms / Select',
    component: Select_1.BootstrapSelect
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapSelect: Select_1.BootstrapSelect }, data() {
        return {
            model: ''
        };
    }, template: `
    <form>
      <BootstrapSelect :model.sync="model" name="example_name"
                       v-bind="$props" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>` }));
const defaultArgs = {
    disabled: false,
    errors: [],
    label: faker.lorem.words(),
    options: Array.from(Array(10)).map(() => {
        const label = faker.lorem.words();
        return { label, value: label };
    }),
    placeholder: faker.lorem.words(),
    readonly: false,
    required: false,
    size: composables_1.SizeMap.Medium
};
exports.Basic = Template.bind({});
exports.Basic.args = defaultArgs;
exports.WithError = Template.bind({});
exports.WithError.args = Object.assign(Object.assign({}, defaultArgs), { errors: [faker.lorem.sentence()] });
