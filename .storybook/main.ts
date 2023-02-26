import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../storybook/**/*.mdx",
    "../storybook/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, options) {
    // Customize the Vite config here
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "~",
            replacement: path.resolve(__dirname, "../src"),
          },
        ],
      },
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
  features: {
    storyStoreV7: true,
  },
};
export default config;
