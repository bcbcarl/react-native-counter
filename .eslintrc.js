module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "react-native/no-color-literals": 1
  },
  "plugins": [
    "react",
    "react-native",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "jest": true
  }
};
