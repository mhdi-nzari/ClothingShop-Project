var colors = [];

var zoomOptions = {
  zoomWindowHeight: 300,
  zoomWindowWidth: 600,
  borderSize: 0,
  easing: true,
  zoomWindowPosition: 11,
};

$(document).ready(function () {
  $('.regular').slick({
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumbs',
    autoplay: false,
  });

  $('.thumbs').slick({
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.regular',
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
  });
  $('.regular .slick-current img').elevateZoom(zoomOptions);
  $('.regular').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      $.removeData(currentSlide, 'elevateZoom');
      $('.zoomContainer').remove();
    }
  );
  $('.regular').on('afterChange', function () {
    $('.regular .slick-current img').elevateZoom(zoomOptions);
  });
});

function filter(key) {
  $('.regular, .thumbs').slick('slickUnfilter');

  if (typeof key === 'string') {
    $('.regular, .thumbs').slick('slickFilter', 'div[data-color="${key}"]');
  }
  $('.regular, .thumbs').slick('refresh');
}
