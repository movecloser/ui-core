"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeLink = void 0;
const faker = require("faker");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.fakeLink = {
    isExternal: false,
    label: faker.lorem.words(),
    newTab: false,
    target: { path: faker.internet.url() }
};
