"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const config_1 = require("../../../../config");
const storybook_1 = require("../../storybook");
const Icon_1 = require("./Icon");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Icon',
    component: Icon_1.BootstrapIcon
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapIcon: Icon_1.BootstrapIcon }, inject: { $dsl: config_1.DSL_CONFIG_INJECTION_KEY }, computed: {
        icons() {
            // @ts-expect-error - Correct TS annotation would require too much effort.
            return Object.keys(this.$dsl.icons);
        }
    }, template: `
    <div>
      <BootstrapIcon v-bind="$props" :title="name" />
      <hr>
      <p class="m-0">Available icons: <code>{{ icons.join(', ') }}</code></p>
    </div>
  ` }));
exports.Icon = Template.bind({});
exports.Icon.args = {
    color: '#5F5F5F',
    height: '1em',
    name: '',
    width: '1em'
};
