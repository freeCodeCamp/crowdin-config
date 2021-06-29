const tests = [
  {
    name: 'should pass when source and translation do not contain any <0> tags',
    crowdin: {
      source: `The <code>p</code> contains paragraph text.`,
      translation: `El <code>p</code> contiene texto de párrafo.`
    },
      result: {
      success: true
    }
  },
  {
    name: 'should fail when source contains one or more <0> tags',
    crowdin: {
      source: `The <0>p</0> contains paragraph text.`,
      translation: `El <code>p</code> contiene texto de párrafo.`
    },
    result: {
      success: false,
      message: 'Under Editor Settings, make sure you have selected "Show" for the "HTML tags displaying" setting. You may currently have it set to "Auto".'
    }
  },
  {
    name: 'should fail when translation contains one or more <0> tags',
    crowdin: {
      source: `The <code>p</code> contains paragraph text.`,
      translation: `El <0>p</0> contiene texto de párrafo.`
    },
    result: {
      success: false,
      message: 'Under Editor Settings, make sure you have selected "Show" for the "HTML tags displaying" setting. You may currently have it set to "Auto".'
    }
  }
];

module.exports = tests;