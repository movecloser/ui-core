// Copyright © 2021 Move Closer

import 'reflect-metadata'
import Vue from 'vue'
import 'bootstrap/scss/bootstrap.scss'

import { BootstrapDSL } from '../src'

/**
 * @type {import('@storybook/api').Parameters}
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

Vue.use(BootstrapDSL, {
  icons: {},
  prefix: 'Ui'
})
