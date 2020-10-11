# stylelint-config-scss

![test](https://github.com/approvers/stylelint-config-scss/workflows/test/badge.svg)

> The shareable SCSS config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard), enables [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss).

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](https://github.com/approvers/stylelint-config-scss/blob/master/index.js).


## Installation

```shell script
# stylelint and stylelint-scss are peer dependencies for this package.
npm install stylelint stylelint-scss @approvers/stylelint-config-scss
```


## Usage

You just set your `stylelint` config to:

```json
{
  "extends": ["@approvers/stylelint-config-scss"]
}
```


### Extending the config

Simply add a `"rules"` key to your config if you want overrides and additions there.

For example, turn `at-rule-conditional-no-parentheses` rule off and turn `dollar-variable-default` rule on:

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
