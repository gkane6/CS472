$(() => {
  console.log("On load");
  $("#load").click(fetchImg);
});

function fetchImg() {
  $("#container").html(`<div id="loading">
  <img src="http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loading.gif" alt="Loading..." /> Loading...
</div>;`);

  var myHeaders = new Headers({
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
  });
  fetch(
    "http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php",
    {
      method: "GET",
      mode: "no-cors",
    }
  )
    .then((rsp) => {
      return rsp.text();
    })
    .then((dt) => {
      console.log("test");
      console.log(dt);
      showImg(dt);
    });
}

function showImg(data) {
  $("#container").html(`<div id="boot">
  <img src="http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/${data}" />
</div>`);
  console.log(data);
}
