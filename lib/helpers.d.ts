import { VueConstructor } from 'vue';
import { AnyObject } from '@movecloser/front-core';
/**
 * Resolves the provided DSL configuration object.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const getDSLConfig: <Config extends AnyObject>() => Config;
/**
 * Registers the passed-in Vue component in the app.
 *
 * @param component - The Vue component to register.
 * @param [name] - The name under which the component should be available in the `<template>` section.
 *   If not specified, component will be registered under the identifier from the `component.name` property.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const registerComponent: (component: VueConstructor, name?: string | undefined) => void;
