
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  })
  $("#show").click(function(){
    $("p").show();
  })
  $("#toggle").click(function(){
    $("p").toggle(500);
  })
})