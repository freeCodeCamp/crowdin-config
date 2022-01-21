function startsWith(str, search) {
  return str.substring(0, search.length) === search;
}

var result = { success: true };

var labelNames = [
  "new",
  "player",
  "kid",
  "mom",
  "dad",
  "mint",
  "annika",
  "girl",
  "boy",
  "college_boy",
  "college_girl",
  "female",
  "marco",
  "layla",
  "cafe_manager",
  "host",
  "journalist",
  "office_worker",
  "male",
  "trivia_guy",
  "interviewer",
  "npc",
];

var source = crowdin.source;
var translation = crowdin.translation;

for (var i = 0; i < labelNames.length; i++) {
  var label = labelNames[i];
  if (startsWith(source, label) && !startsWith(translation, label)) {
    result.success = false;
    result.message =
      "The Ren'Py keyword " + label + " should not be translated.";
    result.fixes = [];
  }
}

return result;
