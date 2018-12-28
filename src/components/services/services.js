$(document).ready(function () {
  if(window.innerWidth < 998) {
    $('.jsServicesSlick').slick({
      dots: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="services-prev"><img src="assets/images/arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="services-next"><img src="assets/images/arrow.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
});
