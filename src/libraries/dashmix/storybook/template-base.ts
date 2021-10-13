// Copyright © 2021 Move Closer

import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import { ArgTypes } from '@storybook/vue'
import { ComponentOptions } from 'vue'

import { i18n } from '../config/i18n'

/**
 * Returns base configuration for every `Template` function.
 *
 * @param argTypes - `argTypes` for the _Storybook's Manager_.
 *
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const getTemplateBase = (argTypes: ArgTypes): Partial<ComponentOptions<Vue>> => ({
  i18n: new VueI18n(i18n),
  props: Object.keys(argTypes),
  router: new VueRouter()
})
