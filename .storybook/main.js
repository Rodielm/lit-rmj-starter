module.exports = {
    "stories": [
        "../stories/**/*.stories.{js,md,mdx}",

    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    "framework": "@storybook/web-components",
    "core": {
        "builder": "storybook-builder-vite"
    }
}

// "../src/**/*.stories.mdx",
// "../src/**/*.stories.@(js|jsx|ts|tsx)"
