$(() => {
  console.log("onn load");
  $("#transp").change(function () {
    console.log($(this).val());
    const vall = $(this).val();
    fetchInfo(vall);
  });
});

function fetchInfo(val) {
  $.get(`/transport?type=${val}`).done(displayInfo);
}

function displayInfo(data) {
  console.log(data);
  $("#adliul").html(
    data.advantages
      .map((el) => {
        return `
    <li>${el}</li>
  `;
      })
      .join("\n")
  );
  $("#dliul").html(
    data.disadvantages
      .map((el) => {
        return `
    <li>${el}</li>
  `;
      })
      .join("\n")
  );
}
