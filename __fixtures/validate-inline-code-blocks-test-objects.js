const tests = [
  {
    name: 'should pass when there are no inline code blocks in the source or translation ',
    crowdin: {
      source: `This paragraph has no code blocks.`,
      translation: 'Este párrafo no tiene bloques de código.'
    },
    result: {
      success: true
    }
  },
  {
    name: 'should fail when source one or more code blocks and translation has none ',
    crowdin: {
      source: `The <code>p</code> contains paragraph text.`,
      translation: `El p contiene texto de párrafo.`
    },
    result: {
      success: false,
      message: 'The source has 1 inline code blocks and the translation has none.'
    }
  },
  {
    name: 'should pass when source and translation have the same number of code blocks ',
    crowdin: {
      source: `The <code>p</code> contains paragraph text and the <code>a</code> element is used for links.`,
      translation: `El <code>p</code> contiene texto de párrafo y el elemento <code>a</code> se utiliza para los enlaces.`
    },
    result: {
      success: true
    }
  },
  {
    name: 'should fail when source has no code blocks and the translation has one or more code blocks ',
    crowdin: {
      source: `The p contains paragraph text and the a element is used for links.`,
      translation: `El <code>p</code> contiene texto de párrafo y el elemento <code>a</code> se utiliza para los enlaces.`
    },
    result: {
      success: false,
      message: 'Extra inline code blocks detected in translation and none are found in source.'
    }
  },
  {
    name: 'should fail when source has a different number of code blocks than the translation ',
    crowdin: {
      source: `The <code>p</code> contains paragraph text and the a element is used for links.`,
      translation: `El <code>p</code> contiene texto de párrafo y el elemento <code>a</code> se utiliza para los enlaces.`
    },
    result: {
      success: false,
      message: 'The number of inline code blocks for source and translation do no match (# of source code blocks = 1, # of translation code blocks = 2).'
    }
  },
  {
    name: 'should pass when source and translation have the same frequencies for the code tag contents, but appear in a different order ',
    crowdin: {
      source: `Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.`,
      translation: `Tu clase <code>blue-box</code> debería dar a los elementos un <code>margin</code> de <code>-15px</code>.`
    },
    result: {
      success: true,
    }
  },
  {
    name: 'should fail when source and translation have different frequencies for the code tag contents ',
    crowdin: {
      source: `The <code>p</code> contains paragraph text and the <code>a</code> element is used for links.`,
      translation: `El <code>i</code> contiene texto de párrafo y el elemento <code>a</code> se utiliza para los enlaces.`
    },
    result: {
      success: false,
      message: 'Inline code blocks should not be changed. You appear to have changed at least one code block.'
    }
  },
  {
    name: 'should pass when source and translation when code blocks have same content but Crowdin used numbered tags for code blocks ',
    crowdin: {
      source: `The <0>p</0> contains paragraph text and the <0>a</0> element is used for links.`,
      translation: `El <0>p</0> contiene texto de párrafo y el elemento <0>a</0> se utiliza para los enlaces.`
    },
    result: {
      success: true
    }
  } 
];

module.exports = tests;