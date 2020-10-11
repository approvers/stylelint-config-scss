"use strict";

const fs = require("fs");
const path = require("path");
const stylelint = require("stylelint");

const config = require("../");

describe("valid.css", () => {
  const css = fs.readFileSync(path.resolve(__dirname, "valid.css"), "utf-8");
  const runLint = () =>
    stylelint.lint({
      code: css,
      config,
    });

  it("should return no errors", async () => {
    const result = await runLint();
    expect(result.errored).toBeFalsy();
  });

  it("should return no warnings", async () => {
    const result = await runLint();
    expect(result.results[0].warnings).toHaveLength(0);
  });
});

describe("valid.scss", () => {
  const scss = fs.readFileSync(path.resolve(__dirname, "valid.scss"), "utf-8");
  const runLint = () =>
    stylelint.lint({
      code: scss,
      config,
    });

  it("should return no errors", async () => {
    const result = await runLint();
    expect(result.errored).toBeFalsy();
  });

  it("should return no warnings", async () => {
    const result = await runLint();
    expect(result.results[0].warnings).toHaveLength(0);
  });
});
