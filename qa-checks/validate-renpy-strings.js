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

var source = crowdin.source.trim();
var translation = crowdin.translation.trim();

if (labelNames.every((label) => !source.startsWith(label))) {
  return result;
}

for (var label of labelNames) {
  if (source.startsWith(label) && !translation.startsWith(label)) {
    result.success = false;
    result.message =
      "The Ren'Py keyword " + label + " should not be translated.";
    result.fixes = [];
  }
}

return result;
