// Validate Inline Code Blocks

function createCodeArr(arr) {
  var codeArr = [];
  for (var i = 0; i < arr.length; i++) {
    codeArr.push(arr[i][3]);
  }
  return codeArr;
};

function countElements(arr) {
  var obj = {};
  obj.__tempHasOwnProperty = Object.prototype.hasOwnProperty;
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    if (obj.__tempHasOwnProperty(elem)) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  return obj;
}

function doCountsMatch (s, t) {
  var sourceKeys = Object.keys(s);
  var translationKeys = Object.keys(t);
  if (sourceKeys.length !== translationKeys.length) {
    return false;
  }
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (s[key] !== t[key]) {
      return false;
    }
  }
  return true;
}

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

var source =  crowdin.source;
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
    var sourceCountObj = countElements(sourceCodeArr);
    var translationCountObj = countElements(translationCodeArr);

    if (!doCountsMatch(sourceCountObj, translationCountObj)) {
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
