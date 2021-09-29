"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const contracts_1 = require("../../contracts");
const storybook_1 = require("../../storybook");
const Button_1 = require("./Button");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Button',
    component: Button_1.BootstrapButton,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: contracts_1.BootstrapSize
            }
        },
        theme: {
            control: {
                type: 'select',
                options: contracts_1.BootstrapTheme
            }
        }
    }
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapButton: Button_1.BootstrapButton }, methods: {
        onClick() {
            console.debug('🏷 onClick()');
        }
    }, template: `
    <BootstrapButton v-bind="$props" @click="onClick">
      Lorem ipsum
    </BootstrapButton>
  ` }));
exports.Button = Template.bind({});
exports.Button.args = {
    disabled: false,
    link: false,
    loading: false,
    outline: false,
    size: contracts_1.BootstrapSize.Normal,
    theme: contracts_1.BootstrapTheme.Primary
};
