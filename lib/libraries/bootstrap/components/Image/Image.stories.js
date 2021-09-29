"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyResponsive = exports.Lazy = exports.NormalResponsive = exports.Normal = void 0;
const faker = require("faker");
const storybook_1 = require("../../storybook");
const Image_1 = require("./Image");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Image',
    component: Image_1.BootstrapImage
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapImage: Image_1.BootstrapImage }, template: '<BootstrapImage v-bind="$props" />' }));
const defaultArgs = {
    alt: faker.lorem.sentence(),
    lazy: false,
    src: faker.image.image()
};
const responsiveArgs = {
    srcset: Array.from(Array(10)).reduce((acc, curr, index) => {
        const imgWidth = (index + 1) * 100;
        const imgSrc = faker.image.imageUrl(imgWidth);
        return Object.assign(Object.assign({}, acc), { [imgWidth]: imgSrc });
    }, {})
};
exports.Normal = Template.bind({});
exports.Normal.args = Object.assign({}, defaultArgs);
exports.NormalResponsive = Template.bind({});
exports.NormalResponsive.args = Object.assign(Object.assign({}, defaultArgs), responsiveArgs);
exports.Lazy = Template.bind({});
exports.Lazy.args = Object.assign(Object.assign({}, defaultArgs), { lazy: true });
exports.LazyResponsive = Template.bind({});
exports.LazyResponsive.args = Object.assign(Object.assign(Object.assign({}, defaultArgs), responsiveArgs), { lazy: true });
