// Validate Inline Code Blocks

function createCodeArr(arr) {
  var codeArr = [];
  for (var i = 0; i < arr.length; i++) {
    codeArr.push(arr[i][3]);
  }
  return codeArr;
};

var sortLogic = function (a, b) {
  return a.localeCompare(b, 'en');
};

var matchAll = function(str){
  var regex1 = /(\<(code|\d+)>)([^<]*?)(\<\/\2>)/gi;
  var regex2 = /(\<(code|\d+)>)([^<]*?)(\<\/\2>)/i;
  var matches = [];
    
  var match_result = str.match(regex1) || [];
  for (var index = 0; index < match_result.length; index++){
    var item = match_result[index];
    matches[index] = item.match(regex2); 
  }
  return matches;
};

var result = { success: false };

var source = crowdin.source;
var translation = crowdin.translation;

var sourceMatch = matchAll(source);
var sourceCodeArr = createCodeArr(sourceMatch);
var translationMatch = matchAll(translation);
var translationCodeArr = createCodeArr(translationMatch);

if (sourceCodeArr.length) {
  if (!translationCodeArr.length) {
    result.message = 'The source has ' + sourceCodeArr.length + ' inline code blocks and the translation has none.';
    result.fixes = [];
  } else if (sourceCodeArr.length === translationCodeArr.length) {
    var sortedSourceCodeArr = sourceCodeArr.sort(sortLogic);
    var sortedTranslationCodeArr = translationCodeArr.sort(sortLogic);
    if (sortedSourceCodeArr.join('') !== sortedTranslationCodeArr.join('')) {
      result.message = 'Inline code blocks should not be changed. You appear to have changed at least one code block.';
      result.fixes = [];
    } else {
      result.success = true;
    }
  } else {
    result.message = 'The number of inline code blocks for source and translation do no match (# of source code blocks = ' + sourceCodeArr.length + ', # of translation code blocks = ' + translationCodeArr.length + ').';
    result.fixes = [];
  }
} else if (translationCodeArr.length) {
  result.message = 'Extra inline code blocks detected in translation and none are found in source.';
  result.fixes = [];
} else {
  result.success = true;
}

return result;