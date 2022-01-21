const { iterateThroughTests, createQaCheckFunction } = require("./utils");

const tests = require("./__fixtures/validate-message-boxes-test-objects");
const qaCheck = createQaCheckFunction("/validate-message-boxes.js");

describe("validate-renpy-strings", () => {
  it("qaCheck is a function", () => {
    expect(typeof qaCheck).toBe("function");
  });
  iterateThroughTests(qaCheck, tests);
});
