"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleWithError = exports.Multiple = exports.SingleWithError = exports.Single = void 0;
const faker = require("faker");
const storybook_1 = require("../../storybook");
const Check_1 = require("./Check");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Forms / Check',
    component: Check_1.BootstrapCheck,
    argTypes: {
        multiple: { table: { disable: true } }
    }
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapCheck: Check_1.BootstrapCheck }, data() {
        return {
            model: args.multiple ? [] : null
        };
    }, template: `
    <div>
      <BootstrapCheck v-bind="$props" :model.sync="model" name="check" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </div>
  ` }));
const defaultArgs = {
    label: faker.lorem.sentence(),
    options: Array.from(Array(5)).map((_, index) => {
        const label = faker.lorem.word();
        const value = `${index}-${label}`;
        return { label, value };
    }),
    stacked: false
};
exports.Single = Template.bind({});
exports.Single.args = Object.assign(Object.assign({}, defaultArgs), { multiple: false });
exports.SingleWithError = Template.bind({});
exports.SingleWithError.args = Object.assign(Object.assign({}, defaultArgs), { multiple: false, errors: [faker.lorem.sentence()] });
exports.Multiple = Template.bind({});
exports.Multiple.args = Object.assign(Object.assign({}, defaultArgs), { multiple: true });
exports.MultipleWithError = Template.bind({});
exports.MultipleWithError.args = Object.assign(Object.assign({}, defaultArgs), { multiple: true, errors: [faker.lorem.sentence()] });
