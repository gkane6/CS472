$(function () {
  $(".btnInfo").click((event) => {
    updateSpan(event.target.value);
  });
});

function updateSpan(val) {
  $.get(`/computers?id=${val}`).done(displayPictures);
}

function displayPictures(data) {
  $("#compInfo").html(`<div><span>CPU Speed</span><span>${data.cpu}</span></div>
  <div><span>RAM amount</span><span>${data.ram}</span></div>
  <div><span>Storage space</span><span>${data.storage}</span></div>
  <div><span>Space</span><span>${data.price}</span></div>`);
}
