"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const faker = require("faker");
const storybook_1 = require("../../storybook");
const Table_1 = require("./Table");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const meta = {
    title: 'Ui Core / Bootstrap / Table',
    component: Table_1.BootstrapTable
};
exports.default = meta;
const Template = (args, { argTypes }) => (Object.assign(Object.assign({}, (0, storybook_1.getTemplateBase)(argTypes)), { components: { BootstrapTable: Table_1.BootstrapTable }, template: '<BootstrapTable v-bind="$props" />' }));
const items = Array.from(Array(10)).map(() => ({
    position: faker.name.jobTitle(),
    department: faker.name.jobType(),
    place: faker.address.cityName(),
    seeMore: {
        props: ['item'],
        methods: {
            onClick() {
                // @ts-expect-error - Correct TS annotation would require too much effort.
                console.debug(this.item.position);
            }
        },
        template: '<button @click="onClick()">See more</button>'
    }
}));
exports.Table = Template.bind({});
exports.Table.args = {
    fields: [
        {
            key: 'position',
            label: 'Stanowisko'
        },
        {
            key: 'department',
            label: 'Dział'
        },
        {
            key: 'place',
            label: 'Miejsce pracy'
        },
        {
            key: 'seeMore',
            label: '---'
        }
    ],
    items
};
