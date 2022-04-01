const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  webpackFinal: config => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [{ from: './node_modules/ionicons/dist/ionicons/svg', to: './svg/' }],
      })
    );
    return config;
  }
}