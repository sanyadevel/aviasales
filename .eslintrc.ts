export {};

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "react-hooks", "import", "prettier"],
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: ".*", argsIgnorePattern: ".*" },
    ],
    "react/static-property-placement": "off",
    "operator-linebreak": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-wrap-multilines": "off",
    "no-useless-constructor": "off",
    "react/sort-comp": "off",
    "eslint import/no-cycle": "off",
    indent: "off",
    "no-shadow": "off",
    "eslint newline-after-var": ["error", "always"],
    "linebreak-style": 0,
    "no-tabs": "off",
    "no-alert": "off",
    quotes: ["error", "single"],
    "jsx-a11y/control-has-associated-label": [
      2,
      {
        labelAttributes: ["label"],
        controlComponents: ["CustomComponent"],
        ignoreElements: [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video",
        ],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        depth: 3,
      },
    ],
    "react/button-has-type": [
      "enabled",
      {
        button: "boolean",
        submit: "boolean",
        reset: "boolean",
      },
    ],
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "import/no-unresolved": [
      2,
      {
        caseSensitive: false,
      },
    ],
    "import/order": [
      2,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
