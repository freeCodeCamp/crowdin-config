const tests = [
  {
    name: "should pass when a label is found unchanged",
    crowdin: {
      source: `player "This should pass"`,
      translation: `player "Esto debería pasar"`,
    },
    result: {
      success: true,
    },
  },
  {
    name: "should fail when a label is changed",
    crowdin: {
      source: `player "This should fail"`,
      translation: `jugando "Esto debería fallar"`,
    },
    result: {
      success: false,
      message: "The Ren'Py keyword player should not be translated.",
      fixes: [],
    },
  },
  {
    name: "should pass when there is no label",
    crowdin: {
      source: "Hello world!",
      translation: "Hola mundo!",
    },
    result: {
      success: true,
    },
  },
];

module.exports = tests;
