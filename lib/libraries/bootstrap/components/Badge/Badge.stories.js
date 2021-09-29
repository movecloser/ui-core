"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const contracts_1 = require("../../contracts");
const storybook_1 = require("../../storybook");
const Badge_1 = require("./Badge");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Badge',
    component: Badge_1.BootstrapBadge,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: contracts_1.BootstrapTheme
            }
        }
    }
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapBadge: Badge_1.BootstrapBadge }, template: '<BootstrapBadge v-bind="$props">Lorem ipsum</BootstrapBadge>' }));
exports.Badge = Template.bind({});
exports.Badge.args = {
    theme: contracts_1.BootstrapTheme.Primary
};
