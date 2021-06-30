const {
  iterateThroughTests,
  createQaCheckFunction
}= require('./utils');

const tests = require('./__fixtures/validate-inline-code-blocks-test-objects');
const qaCheck = createQaCheckFunction('/validate-inline-code-blocks.js');

describe('validate-inline-code-blocks', () => {
  it('qaCheck is a function', () => {
    expect(typeof qaCheck).toBe(
      'function'
    );
  });
  iterateThroughTests(qaCheck, tests);
});