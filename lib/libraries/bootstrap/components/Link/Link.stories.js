"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSlot = exports.External = exports.Default = void 0;
const storybook_1 = require("../../storybook");
const Link_1 = require("./Link");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Link',
    component: Link_1.BootstrapLink
};
exports.default = meta;
const defaultArgs = {
    link: {
        isExternal: false,
        label: 'Lorem label',
        newTab: false,
        target: '/lorem/ipsum'
    }
};
const TDefault = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapLink: Link_1.BootstrapLink }, template: `
    <BootstrapLink v-bind="$props" />
  ` }));
exports.Default = TDefault.bind({});
exports.Default.args = defaultArgs;
const TExternal = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapLink: Link_1.BootstrapLink }, template: `
    <BootstrapLink v-bind="$props" />
  ` }));
exports.External = TExternal.bind({});
exports.External.args = {
    link: {
        isExternal: false,
        label: 'Lorem external',
        newTab: false,
        target: 'https://www.google.com'
    }
};
const TCustomSlot = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapLink: Link_1.BootstrapLink }, template: `
    <BootstrapLink v-bind="$props">
      <span class="position-absolute bg-white p-2">This image works as a link!</span>
      <img src="https://images.unsplash.com/photo-1619143921821-61e111505f3e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" style="max-width: 400px">
    </BootstrapLink>
  ` }));
exports.CustomSlot = TCustomSlot.bind({});
exports.CustomSlot.args = defaultArgs;
