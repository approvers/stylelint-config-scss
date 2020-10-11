# stylelint-config-scss

![test](https://github.com/approvers/stylelint-config-scss/workflows/test/badge.svg)

> The shareable SCSS config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard), enables [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss).

Use it as is or as a foundation for your own config.

About the rules which is used this config, please see the [config itself](https://github.com/approvers/stylelint-config-scss/blob/master/index.js).


## Installation

```shell script
# stylelint and stylelint-scss are peer dependencies for this package.
npm install stylelint stylelint-scss @approvers/stylelint-config-scss
```


## Usage

All you need to do is to set your `stylelint` config to;

```json
{
  "extends": ["@approvers/stylelint-config-scss"]
}
```


### Extending the config

If you want to override and add rules to your config, simply add the `"rules"` key there.

For example, turn `at-rule-conditional-no-parentheses` rule off and turn `dollar-variable-default` rule on;

```json
{
  "extends": ["@approvers/stylelint-config-scss"],
  "rules": {
    "at-rule-conditional-no-parentheses": null,
    "dollar-variable-default": true
  }
}
```


## [License](https://github.com/approvers/stylelint-config-scss/blob/master/LICENSE)

MIT License.
