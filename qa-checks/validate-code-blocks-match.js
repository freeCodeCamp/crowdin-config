// Validate Code Blocks Match
// Validates that source and translation inline or multi-line code block strings match 100%

var result = { success: false };

var source = crowdin.source;
var translation = crowdin.translation;
var context = crowdin.context;

var isCode = function(str) {
  return /^\/pre\/code|\/code$/.test(str);
};

if (isCode(context)) {
  if (source === translation) {
    result.success = true;
  } else {
    result.message = 'Source and Translation for inline or multi-line code blocks must match. Delete the translation, so the English source is kept';
    result.fixes = [];
  }
} else {
  result.success = true;
}

return result;