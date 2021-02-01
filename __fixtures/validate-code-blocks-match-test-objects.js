const tests = [
  {
    name: 'should pass when context is not a code block ',
    crowdin: {
      context: `p[1]`
    },
    result: {
      success: true
    }
  },
  {
    name: 'should pass when source and translation code blocks match ',
    crowdin: {
      source: `
        const num1 = 5;
        const num2 = 12;
        const sum = 17;
      `,
      translation: `
        const num1 = 5;
        const num2 = 12;
        const sum = 17;
      `,
      context: `pre\/code`
    },
    result: {
      success: true,
    }
  },
  {
    name: 'should fail when source and translation code blocks do not match ',
    crowdin: {
      source: `
        const num1 = 5;
        const num2 = 2;
        const sum = 7;
      `,
      translation: `
        const num1 = 5;
        const num2 = 12;
        const sum = 17;
      `,
      context: `pre\/code`
    },
    result: {
      success: false,
      message: 'Source and Translation for inline or multi-line code blocks must match. Delete the translation, so the English source is kept'
    }
  }
];

module.exports = tests;