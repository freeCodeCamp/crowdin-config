// Validate Message Boxes

var result = { success: false };

var source = crowdin.source;
var translation = crowdin.translation;

var isMessageBox = function(str) {
  return /^\[!(DANGER|NOTE|TIP|WARNING)\]/.test(str);
};

if (isMessageBox(source)) {
  if (isMessageBox(translation)) {
    result.success = true;
  } else {
    result.message = 'Message Boxes such as [!DANGER], [!NOTE], [!TIP], and [!WARNING] should not be translated.';
    result.fixes = [];
  }
} else {
  result.success = true;
}

return result;