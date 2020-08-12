$(() => {
  console.log("ON load");
  $("#submit").click(fetchInfo);
  $("#post button").click((e) => {
    console.log(e);
    console.log(e.target.value);
    fetchCom(e.target.value);
  });
});

//functions

function fetchInfo() {
  const vall = $("#userId").val();
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${vall}`, {
    method: "GET",
  })
    .then((va) => {
      return va.json();
    })
    .then((dt) => {
      showPost(dt);
    });

  fetch(`https://jsonplaceholder.typicode.com/users?id=${vall}`, {
    method: "GET",
  })
    .then((va) => {
      return va.json();
    })
    .then((dt) => {
      showInfos(dt);
    });
}

function showPost(data) {
  $("#post").html(
    data
      .map((el) => {
        return `<div class="btncmnt" value="${el.id}">
        <ul><li>${el.title}</li><li>${el.body}</li></ul>
        <button class="btncmnt" onclick="fetchCom(event)" value="${el.id}" >Comments</button></div>`;
      })
      .join("\n")
  );
}

function fetchCom(e) {
  console.log("fetchCom");
  fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${e.target.value}`,
    {
      method: "GET",
    }
  )
    .then((va) => {
      return va.json();
    })
    .then((dt) => {
      showComments(dt);
    });
}

function showComments(data) {
  $("#com").html(
    data
      .map((el) => {
        return `<div"><ul><li>${el.name}</li><li>${el.body}</li></ul></div>`;
      })
      .join("\n")
  );
}

function showInfos(data) {
  $("#info").html(
    data
      .map((el) => {
        return `<div"><dl><dt>Id</dt><dd>${el.id}</dd><dt>Name</dt><dd>${el.name}</dd><dt>Username</dt><dd>${el.username}</dd><dt>Email</dt><dd>${el.email}</dd><dt>Phone</dt><dd>${el.phone}</dd><dt>Website</dt><dd>${el.website}</dd></dl></div>`;
      })
      .join("\n")
  );
}
