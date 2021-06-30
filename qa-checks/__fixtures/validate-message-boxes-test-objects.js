const tests = [
  {
    name: 'should pass if the source is not a message box',
    crowdin: {
      source: `This is not a message box.`,
    },
    result: {
      success: true
    }
  },
  {
    name: 'should pass if source and translation are same message box type',
    crowdin: {
      source: `[!NOTE] This is a note message box.`,
      translation: `[!NOTE] Este es un cuadro de mensaje de nota.`
    },
    result: {
      success: true
    }
  },
  {
    name: 'should fail if source and translation have different message names',
    crowdin: {
      source: `[!NOTE] This is a note message box.`,
      translation: `[!NOTA] Este es un cuadro de mensaje de nota.`
    },
    result: {
      success: false,
      message: 'Message Boxes such as [!DANGER], [!NOTE], [!TIP], and [!WARNING] should not be translated.'
    }
  },
  {
    name: 'should fail if source is message box and the translation is not a message box',
    crowdin: {
      source: `[!WARNING] The translation is not a message box.`,
      translation: `La traducción no es un cuadro de mensaje.`
    },
    result: {
      success: false,
      message: 'Message Boxes such as [!DANGER], [!NOTE], [!TIP], and [!WARNING] should not be translated.'
    }
  }
];

module.exports = tests;