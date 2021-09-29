"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Basic = void 0;
const faker = require("faker");
const composables_1 = require("../../../../composables");
const storybook_1 = require("../../storybook");
const Input_1 = require("./Input");
const Input_contracts_1 = require("./Input.contracts");
const Input_config_1 = require("./Input.config");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Forms / Input',
    component: Input_1.BootstrapInput,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: (0, storybook_1.getSizeControlOptions)(Input_config_1.bootstrapInputSizeRegistry)
            }
        },
        type: {
            control: {
                type: 'select',
                options: Input_contracts_1.BootstrapInputType
            }
        }
    }
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapInput: Input_1.BootstrapInput }, data() {
        return {
            model: ''
        };
    }, template: `
    <form>
      <BootstrapInput :model.sync="model" name="example_name"
                      v-bind="$props" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>` }));
const defaultArgs = {
    disabled: false,
    errors: [],
    icon: '',
    label: faker.lorem.words(),
    placeholder: faker.lorem.words(),
    readonly: false,
    required: false,
    size: composables_1.SizeMap.Medium,
    type: Input_contracts_1.BootstrapInputType.Text
};
exports.Basic = Template.bind({});
exports.Basic.args = defaultArgs;
exports.WithError = Template.bind({});
exports.WithError.args = Object.assign(Object.assign({}, defaultArgs), { errors: [faker.lorem.sentence()] });
