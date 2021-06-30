// Validate If Numbered Tags Exist

function hasNumberedTags(str) {
  var regex = /(\<0>([^<]*?)\<\/0>)/i;
  return !!str.match(regex);
};

var result = { success: false };
var source =  crowdin.source;
var translation = crowdin.translation;

if (!hasNumberedTags(source) && !hasNumberedTags(translation)) {
  result.success = true;
} else {
  result.message = 'Under Editor Settings, make sure you have selected "Show" for the "HTML tags displaying" setting. You may currently have it set to "Auto".';
  result.fixes = [];
}

return result;