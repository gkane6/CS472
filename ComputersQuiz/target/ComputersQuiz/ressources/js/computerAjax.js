$(function () {
  $(".btnInfo").click((event) => {
    console.log(event.target.value);
    //updateSpan();
  });
});

function updateSpan(val) {
  $.get(`/computers?id=${val}`).done(displayPictures);
}

function displayPictures(data) {
  $("#pictures").html(data);
}
