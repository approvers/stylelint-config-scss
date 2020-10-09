"use strict";

const fs = require("fs");
const path = require("path");
const stylelint = require("stylelint");

const config = require("../");

describe("invalid.css", () => {
  const css = fs.readFileSync(path.resolve(__dirname, "invalid.css"), "utf-8");
  const runLint = () =>
    stylelint.lint({
      code: css,
      config,
    });

  it("should return error", async () => {
    const result = await runLint();
    expect(result.errored).toBeTruthy();
  });

  it("should return one warnings", async () => {
    const result = await runLint();
    expect(result.results[0].warnings).toHaveLength(1);
  });

  it("warning text should be 'Expected a leading zero (number-leading-zero)'", async () => {
    const result = await runLint();
    expect(result.results[0].warnings[0].text).toBe(
      "Expected a leading zero (number-leading-zero)",
    );
  });

  it("warning rule should be 'number-leading-zero'", async () => {
    const result = await runLint();
    expect(result.results[0].warnings[0].rule).toBe("number-leading-zero");
  });

  it("warning severity should be 'error'", async () => {
    const result = await runLint();
    expect(result.results[0].warnings[0].severity).toBe("error");
  });

  it("warning line should be '2'", async () => {
    const result = await runLint();
    expect(result.results[0].warnings[0].line).toBe(2);
  });

  it("warning column should be '8'", async () => {
    const result = await runLint();
    expect(result.results[0].warnings[0].column).toBe(8);
  });
});
