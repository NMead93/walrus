$(function() {
  $(".clickable").click(function() {
    $("#show-hide").toggle();
  });

  $(".fade-text").click(function() {
    $("#fade").fadeToggle();
  });

  $(".slide-text").click(function() {
    $("#slide").slideToggle();
  });

})
