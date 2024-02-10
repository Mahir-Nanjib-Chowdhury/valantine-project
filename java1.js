var noTextList = [
  "NO",
  "Are you sure?",
  "No second thoughts?",
  "Any reconsideration?",
  "No chance?",
  "Still a no?",
  "No possibility?",
  "Absolutely final?",
  "একটু শুনো না 😔",
  "Yes বলো না প্লিজ 🥺",
];
var yesPadding = 40,
  noPadding = 40;

var yesID = "p-[" + yesPadding + "px]";
var noID = "p-[" + noPadding + "px]";

$("#yesID").addClass(yesID);
$("#noID").addClass(noID);

var noTextListIndex = 0;
$("#noID").text(noTextList[noTextListIndex]);

var sadIndex = -1;

$("#noID").click(function () {
  $("#yesID").removeClass(yesID);
  $("#noID").removeClass(noID);
  yesPadding += 5;
  noPadding -= 5;
  yesID = "p-[" + yesPadding + "px]";
  noID = "p-[" + noPadding + "px]";
  $("#noID").text(noTextList[++noTextListIndex]);
  $("#yesID").addClass(yesID);
  $("#noID").addClass(noID);
  if (sadIndex < 8) {
    sadIndex++;
  }
  let imgSrc = `sad${sadIndex}.gif`;
  $("#beforeYes img").attr("src", imgSrc);
});

var yesIndex = 0;
var elements = $("#afterYes img");

function showImagesWithDelay(index) {
  if (index < 6) {
    // Show the current element
    $(elements[index]).fadeIn(2500, function () {
      // Call the function recursively for the next element
      yesIndex++;
      showImagesWithDelay(yesIndex + 1);
    });
  }
  if (index == 0) {
    $(elements[index]).fadeOut(1);
  } else {
    if (index - 1 < 5) {
      $(elements[index - 1]).fadeOut(1);
    }
  }
}

$("#yesID").click(function () {
  $("#beforeYes").addClass("hidden");
  $("#afterYes").removeClass("hidden");
  showImagesWithDelay(yesIndex);
});
