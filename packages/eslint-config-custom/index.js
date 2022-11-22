module.exports = {
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint-config-prettier",
    "prettier"
  ],
  rules: {
    "react/jsx-key": "off",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/require-default-props": 0,
    "camelcase": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/style-prop-object": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", ".tsx", ".ts"]
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ]
  }
};