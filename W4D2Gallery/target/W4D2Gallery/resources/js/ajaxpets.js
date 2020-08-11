$(function () {
  $("#puppies").click(updatePictures);
  $("#kitties").click(updatePictures);
});

function updatePictures() {
  var animal = "";
  if ($("#puppies").attr("checked") == "checked") {
    animal = "puppy";
  } else {
    animal = "kitty";
  }
  $.ajax(
    "http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php",
    {
      type: "get",
      data: {
        animal: animal,
      },
    }
  ).done(displayPictures);
}

function displayPictures(data) {
  $("#pictures").html(
    data +
      '<img src="http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loading.gif" />'
  );
}
