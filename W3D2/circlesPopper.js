$(function (params) {
  console.log("In on load");
  console.log(params);
  colors = ['#FFB30C', '#58EC00', '#0087EC', '#EEEEEE', '#FF5A00' ]


  $("#start").click(() => {
    console.log("on clickk");
    const widthC = parseInt($("#startW").val());
    const wGrth = parseInt($("#GWidth").val());
    const rate = parseInt($("#rate").val());
    const numC = parseInt($("#numbCircle").val());

    console.log(typeof numC);

    for(let i=0 ;i<numC;i++){
      $("#circlesContainer").append(`<div class="circle" id="circle${i}" style="background-color:${colors[Math.floor(Math.random() * 4)]};width:${widthC}px;height:${widthC}px;border-radius:${widthC/2}px;left:${Math.floor(Math.random() * 1000) + 100}px;top:${Math.floor(Math.random() * 1000) + 100}px;right:${Math.floor(Math.random() * 1000) + 100}px" ></div>`)
    }

    $(".circle").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
});

    $(".circle").click((e)=>{
      $(`#${e.target.id}`).remove()
      console.log(e);
    })

    let time = setInterval(()=>{
      $(".circle").css({"height": `+=${wGrth}px`,
      "width": `+=${wGrth}px`,
      "border-radius":`+=${wGrth/2}px`})
      $(".circle").hover(function(){
  $(this).css({"opacity": `-=${0.01}`});
  }, function(){
  $(this).css({"opacity":"1"});
});
    },rate)

    //$(".widgets").append($('<input/>',{"type":"text",value:"hello world", name:"hello"}));


    console.log(widthC, wGrth, rate, numC);
  });
});
