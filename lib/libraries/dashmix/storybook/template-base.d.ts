import { ArgTypes } from '@storybook/vue';
import { ComponentOptions } from 'vue';
/**
 * Returns base configuration for every `Template` function.
 *
 * @param argTypes - `argTypes` for the _Storybook's Manager_.
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const getDashmixTemplateBase: (argTypes: ArgTypes) => Partial<ComponentOptions<Vue>>;
