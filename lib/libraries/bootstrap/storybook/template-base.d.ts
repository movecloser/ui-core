import { ArgTypes } from '@storybook/vue';
import { ComponentOptions } from 'vue';
/**
 * Returns base configuration for every `Template` function.
 *
 * @param argTypes - `argTypes` for the _Storybook's Manager_.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const getTemplateBase: (argTypes: ArgTypes) => Partial<ComponentOptions<Vue>>;
