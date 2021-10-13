// Copyright © 2021 Move Closer

const path = require('path')

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-scss'
  ],
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need!
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@': path.resolve(__dirname, '..', 'src')
    // };

    // Return the altered config
    return config;
  }
}
