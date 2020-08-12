$(function () {
  $("#send").click(updateGuests);
});

function updateGuests() {
  var first = $("#first").val();
  var last = $("#last").val();
  console.log(first, last);

  $.ajax("guest.ajax", {
    type: "post",
    data: {
      first: first,
      last: last,
    },
  }).done(displayGuests);
}

function displayGuests(data) {
  var guestList =
    "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";

  console.log(data);

  $("#guestList").html(
    `${data
      .map((el) => {
        return "<ul><li>" + el.first + "  " + el.last + "</li></ul>";
      })
      .join("\n")}`
  );
}
