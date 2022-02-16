const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.@mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-knobs'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias={
      ...config.resolve.alias,
      "@components":path.resolve(
        __dirname,
        "../src/components"
      ),
      "@images":path.resolve(
        __dirname,
        "../src/assets/images"
      ),
      "@":path.resolve(
        __dirname,
        "../src"
      )
    }
    config.resolve.extensions.push(".js", ".jsx");
    return config; 
  },
}