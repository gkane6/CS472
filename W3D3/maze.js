$(document).ready(()=>{

/*   $(".boundary").on({
  mouseenter: function(){
    //$(this).css("background-color", "lightgray");
    $(".boundary").addClass("youlose")
  },
  mouseleave: function(){
    //$(this).css("background-color", "#eeeeee");
    $(".boundary").removeClass("youlose")
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});*/

const reset=(function(){
  function resetBoundary() {
    $(".boundary").removeClass("youlose");
  }
  function resetHeader() {
    $("#status").text("Click the \"S\" to begin.")
  }
  return {
      resetBoundary,
      resetHeader
  }
})();

  $("#start").click((ev)=>{
    reset.resetBoundary()
    $("#status").text("Go!");

    $("#maze").mouseleave(()=>{
      $(".boundary").addClass("youlose");
      $("#status").text("You Loose! :-[");
    })

    $(".boundary").on({
      mouseover: function(){
        $(".boundary").addClass("youlose");
        $("#status").text("You Loose! :-[");
     }})

      $("#end").mouseenter(function(){
          $("#status").text("You Win! :-]");
          reset.resetBoundary()
      }).mouseleave(function() {
        reset.resetBoundary()
        $("#maze").mouseleave(()=>{
          reset.resetBoundary();
          $("#status").text("You Win! :-]");
        })
        $(".boundary").mouseover(function(){
          reset.resetBoundary()
          $("#status").text("Click the \"S\" to begin.")
          })

      });
  })
})

/*container.onmouseover = container.onmouseout = handler;

function handler(event) {
  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }
  log.value += event.type + ':  ' +     'target=' + str(event.target) +
                            ',  relatedTarget=' + str(event.relatedTarget) + "\n";
  log.scrollTop = log.scrollHeight;
  if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }
}*/
