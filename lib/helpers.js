"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerComponent = exports.getDSLConfig = void 0;
const vue_1 = require("vue");
const composition_api_1 = require("@vue/composition-api");
const config_1 = require("./config");
/**
 * Resolves the provided DSL configuration object.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const getDSLConfig = () => {
    const config = composition_api_1.inject(config_1.DSL_CONFIG_INJECTION_KEY);
    if (typeof config === 'undefined') {
        throw new Error(`getDSLConfig(): FATAL ERROR! Failed to inject the DSL configuration! Did you provide the configuration object under the [${config_1.DSL_CONFIG_INJECTION_KEY.toString()}] InjectionKey?`);
    }
    return config;
};
exports.getDSLConfig = getDSLConfig;
/**
 * Registers the passed-in Vue component in the app.
 *
 * @param component - The Vue component to register.
 * @param [name] - The name under which the component should be available in the `<template>` section.
 *   If not specified, component will be registered under the identifier from the `component.name` property.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const registerComponent = (component, name) => {
    /**
     * The identifier under which the component should be registered.
     */
    const id = typeof name === 'string' && name.length > 0 ? name : component.name;
    vue_1.default.component(id, component);
};
exports.registerComponent = registerComponent;
