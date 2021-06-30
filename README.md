# crowdin-config

> Config for Crowdin translation projects on https://translate.freecodecamp.org

## Segmentation Rules

The `segmentation.srx` file contains the default segmentation rules that Crowdin applies, with a modification to prevent breaking strings within inline code tags.

If you see a file on Crowdin which has a string split where it shouldn't be, try applying this rule set first to resolve the issue. If this file does not fix the issue you are seeing, you can modify the first rule (marked with a comment) to account for the edge case you are seeing.

### Modifying the Rule

When you want the string to *not* break, leave `rule break="no"` set. Idenfity where the string is being broken. Within the `beforebreak` tags for the rule, add the text for the portion of the string before the break. Within the `afterbreak` tags for the rule, add the text for the portion of the string after the break. 

A couple of notes regarding rule definitions:

- The rules use standard Regex syntax, so you will need to escape characters such as `.`
- The `beforebreak` Regex should be ended with a whitespace `\s` character.

### Example

If the string `I come first. I come second` is within code tags but Crowdin is still splitting it, you would modify the first rule to be:

```xml
<rule break="no">
    <beforebreak>come\sfirst\.\s</beforebreak>
    <afterbreak>I\scome</afterbreak>
</rule>
```

## QA Checks

Within the `qa-checks` directory are all of our custom Quality Assurance checks set up in Crowdin. These checks run against contributors' translations to ensure they meet the standards and will not break anything.

### Validate Code Blocks Match

This check asserts that a translation has not modified the contents of a string within code blocks, either inline or multi-line.

### Validate If Numbered Tags Exist

Crowdin's UI will replace tags such as `<code>` with a number (which is how they map the tags between the source and translation). This view will break the code blocks validation, so we have a QA that confirms contributors are using the setting that does not mask the tags with numbers.

### Validate Inline Code Blocks

This QA confirms that a translation has not added or removed inline code tags, and that the contents of those code tags have not been translated.

### Validate Message Boxes

Our contributing documentation uses the `flexible-alerts` plugin for Docsify. This plugin relies on specific keywords to render a special message box. The QA asserts that those keywords have not been translated.

### Adding new QA Checks

If a new QA check is needed, you should construct that QA check within the test project on Crowdin. Once you have the QA check working, you should add it to this repository as a `.js` file.

Because Crowdin does not accept QA checks as functions, the `utils.js` file will wrap your new check in a function for the test runner. You should add a matching `.test.js` file to correspond with your new QA check. Refer to the existing `.test.js` files for the format this file should take. 

Finally, add a corresponding `.js` file in the `__fixtures` directory to contain your test cases. Account for as many edge cases as you can.
