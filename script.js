$(window).scroll(function () {
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

  if (scroll >= 600) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$('.js-scroll-trigger').click(function () {
  const scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName),
    scrollTop = scrollElem.offset().top;
  $('html, body').animate(
    {
      scrollTop: scrollTop,
    },
    600
  );
});
