$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 5) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});