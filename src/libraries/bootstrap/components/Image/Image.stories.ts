// Copyright © 2021 Move Closer

import * as faker from 'faker'
import Vue from 'vue'
import { DefaultComputed, ThisTypedComponentOptionsWithArrayProps } from 'vue/types/options'
import { Meta, Story } from '@storybook/vue'

import { BootstrapImage } from './Image'
import { BootstrapImagePropNames, BootstrapImageProps } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Image',
  component: BootstrapImage
}
export default meta

const Template: Story<BootstrapImageProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      show: true
    }
  },

  methods: {
    refresh () {
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  },

  template: `
    <div>
      <UiImage v-if="show" v-bind="$props" />
      <br />
      <UiButton class="btn-link ps-0" @click="refresh">Apply changes</UiButton>
      <br />
      <small><code>(another image below)</code></small>
      <div style="height: 200vh;" />
      <UiImage v-if="show" v-bind="$props" />
    </div>
  `
} as ThisTypedComponentOptionsWithArrayProps<
  Vue,
  { show: boolean },
  { refresh: () => void },
  DefaultComputed,
  BootstrapImagePropNames>
)

const defaultArgs = {
  alt: 'Lorem ipsum',
  sizes: '(max-width: 320px) 320px, (max-width: 720px) 720px, (max-width: 920px) 920px, 1440px',
  src: faker.image.transport(1440),
  srcset: `${faker.image.nature(320)} 320w, ${faker.image.abstract(720)} 720w, ${faker.image.technics(920)} 920w, ${faker.image.transport(1440)} 1440w`
}

/*******************************************************************************
 * Lazy.
 */
export const Lazy = Template.bind({})
Lazy.args = {
  ...defaultArgs,
  isLazy: true
}

/*******************************************************************************
 * Lazy (error/fallback).
 */
export const LazyError = Template.bind({})
LazyError.args = {
  isLazy: true
}

/*******************************************************************************
 * Standard.
 */
export const Standard = Template.bind({})
Standard.args = {
  ...defaultArgs,
  isLazy: false
}

/*******************************************************************************
 * Standard (error/fallback).
 */
export const StandardError = Template.bind({})
StandardError.args = {
  src: 'foo.jpg',
  isLazy: false
}
