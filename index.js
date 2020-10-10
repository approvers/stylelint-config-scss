"use strict";

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-each-key-value-single-line": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-named-arguments": "never",
    "scss/at-function-parentheses-space-before": "never",
  },
};
