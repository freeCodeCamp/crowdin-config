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
