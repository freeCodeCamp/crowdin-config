const { iterateThroughTests, createQaCheckFunction } = require("./utils");

const tests = require("./__fixtures/validate-renpy-strings-test-objects");
const qaCheck = createQaCheckFunction("/validate-renpy-strings.js");

describe("validate-renpy-strings", () => {
  it("qaCheck is a function", () => {
    expect(typeof qaCheck).toBe("function");
  });
  iterateThroughTests(qaCheck, tests);
});
