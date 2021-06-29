const {
  iterateThroughTests,
  createQaCheckFunction
}= require('./utils');

const tests = require('./__fixtures/validate-if-numbered-tags-exist-test-objects');
const qaCheck = createQaCheckFunction('/validate-if-numbered-tags-exist.js');

describe('validate-if-numbered-tags-exist', () => {
  it('qaCheck is a function', () => {
    expect(typeof qaCheck).toBe(
      'function'
    );
  });
  iterateThroughTests(qaCheck, tests);
});