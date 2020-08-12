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
  fetch(
    `http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php?animal=${animal}`,
    {
      method: "GET",
    }
  )
    .then((rsp) => {
      return rsp.text();
    })
    .then((data) => {
      console.log(data);
      console.log(typeof data);
      const strarr = data
        .split(" ")
        .filter((str) => str.includes("images/"))
        .map((e) => e.match(/images\/[a-zA-Z]{1,}[0-9]{1,}\.[a-z]{4}/)[0]);
      console.log(strarr);
      displayPictures(strarr);
    }); //done(displayPictures);
}

function displayPictures(data) {
  $("#pictures").html(
    `${data
      .map((el) => {
        return ` <img src="http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/${el}" />`;
      })
      .join("\n")}`
  );
}
