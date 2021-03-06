"use strict";

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else"],
      },
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"],
      },
    ],
    "scss/at-each-key-value-single-line": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-function-named-arguments": "never",
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-named-arguments": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-rule-conditional-no-parentheses": true,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-after": [
      "always",
      {
        except: ["last-nested", "before-dollar-variable"],
        ignore: ["inside-single-line-block"],
      },
    ],
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-dollar-variable"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "scss/double-slash-comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands", "inside-block"],
      },
    ],
    "scss/double-slash-comment-whitespace-inside": "always",
  },
};
