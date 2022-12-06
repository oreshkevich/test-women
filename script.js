$(window).scroll(function () {
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

  if (scroll >= 600) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
