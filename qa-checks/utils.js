const fs = require('fs');
const path = require('path');

const iterateThroughTests = (qaCheck, tests) => {
  for (let test of tests) {
    it(test.name, () => {
      const result = qaCheck(test.crowdin);
      expect(result.success).toBe(test.result.success);
      expect(result.message).toBe(test.result.message);
    });
  }
};

const createQaCheckFunction = codeFilePath => {
  const functionBody = fs.readFileSync(
    path.join(__dirname + codeFilePath),
    { encoding: 'utf8', flag: 'r' }
  );

  const functionStr = `function qaCheck(crowdin) {
    ${functionBody}
  }`;

  eval(functionStr);
  return qaCheck;
};


module.exports = {
  createQaCheckFunction,
  iterateThroughTests
};