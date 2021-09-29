"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const storybook_1 = require("../../storybook");
const Breadcrumbs_1 = require("./Breadcrumbs");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Breadcrumbs',
    component: Breadcrumbs_1.BootstrapBreadcrumbs
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapBreadcrumbs: Breadcrumbs_1.BootstrapBreadcrumbs }, template: '<BootstrapBreadcrumbs v-bind="$props" />' }));
exports.Breadcrumbs = Template.bind({});
exports.Breadcrumbs.args = {
    items: [
        {
            icon: 'home',
            label: 'Lorem',
            target: 'https://google.com'
        },
        {
            label: 'Ipsum',
            target: '/lorem/ipsum/dolor'
        },
        {
            label: 'Dolor',
            target: { name: 'root.home' }
        }
    ]
};
