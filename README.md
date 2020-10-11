# @approvers/stylelint-config-scss

[![npm](https://img.shields.io/npm/v/@approvers/stylelint-config-scss?style=flat-square)](https://www.npmjs.com/package/@approvers/stylelint-config-scss)
[![test](https://img.shields.io/github/workflow/status/approvers/stylelint-config-scss/test?label=test&style=flat-square)](https://github.com/approvers/stylelint-config-scss/actions?query=workflow%3Atest+branch%3Amaster)
[![last commit](https://img.shields.io/github/last-commit/approvers/stylelint-config-scss?style=flat-square)](https://github.com/approvers/stylelint-config-scss/commits/master)
[![license](https://img.shields.io/github/license/approvers/stylelint-config-scss?style=flat-square)](LICENSE)

> The shareable SCSS config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard), enables [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss).

Use it as is or as a foundation for your own config.

About the rules which is used this config, please see the [config itself](index.js).


## Installation

```shell script
# stylelint and stylelint-scss are peer dependencies for this package.
npm install --save-dev stylelint stylelint-scss @approvers/stylelint-config-scss
```


## Usage

All you need to do is to set your `stylelint` config to:

```json
{
  "extends": ["@approvers/stylelint-config-scss"]
}
```


### Extending the config

If you want to override and add rules to your config, simply add the `"rules"` key there.

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


## [Changelog](CHANGELOG.md)


## [License](LICENSE)

MIT License.
