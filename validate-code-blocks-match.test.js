const {
  iterateThroughTests,
  createQaCheckFunction
}= require('./utils');

const tests = require('./__fixtures/validate-code-blocks-match-test-objects');
const qaCheck = createQaCheckFunction('./validate-code-blocks-match.js');

describe('validate-code-blocks-match', () => {
  it('qaCheck is a function', () => {
    expect(typeof qaCheck).toBe(
      'function'
    );
  });
  iterateThroughTests(qaCheck, tests);
});
