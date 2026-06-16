import js from "@eslint/js";
import nextPlugin from "eslint-config-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-config-prettier";

const config = [
   js.configs.recommended,
   {
      ignores: [".husky/*", ".next/*", "node_modules/*", "**/pnpm-lock.yaml"],
   },
   ...nextPlugin,
   {
      // The `@typescript-eslint` plugin and TypeScript parser are already
      // registered by `eslint-config-next` (its `next/typescript` config),
      // scoped to these files. We reuse that registration rather than
      // redefining the plugin, which would error on any version skew between
      // our direct dependency and the one `eslint-config-next` resolves.
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
         // TypeScript ESLint recommended rules
         ...typescriptEslint.configs.recommended.rules,

         "@typescript-eslint/no-unused-vars": [
            "warn",
            {
               argsIgnorePattern: "^_",
               caughtErrorsIgnorePattern: "^_",
               destructuredArrayIgnorePattern: "^_",
               ignoreRestSiblings: true,
               varsIgnorePattern: "^_",
            },
         ],
      },
   },
   {
      rules: {
         "arrow-parens": ["error", "always"],

         "arrow-spacing": [
            "error",
            {
               before: true,
               after: true,
            },
         ],

         "object-curly-spacing": ["error", "always"],

         quotes: [
            "error",
            "double",
            {
               avoidEscape: true,
            },
         ],
      },
   },
   // Prettier config should be last to override other formatting rules
   prettierConfig,
];

export default config;
