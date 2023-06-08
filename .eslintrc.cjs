module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "standard-with-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    //関数や変数が定義される前に使われているとエラーになるデフォルトの機能をoff
    "no-use-before-define": "off",
    //typescript側のno-use-before-defineを使うようにする
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // or type
    //named exportがエラーになるので使えるようにoff
    "import/prefer-default-export": "off",
    //TypeScriptでチェックしているから不要
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // devDependenciesのimportを許可
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["vite.config.ts"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // importの自動整列
    "import/order": [
      "error",
      {
        // グループ毎の並び順
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        // グループ毎に改行
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        // アルファベット順・大文字小文字を区別しない
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "parent",
            position: "before",
          },
        ],
      },
    ],
    // 型情報しか使ってないimportをimport typeに強制
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    //jsx形式のファイル拡張子をjsxもしくはtsxに限定
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
  },
};
