$('.jsAdvantagesFor').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: '.jsAdvantagesNav'
});
$('.jsAdvantagesNav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.jsAdvantagesFor',
  dots: false,
  centerMode: true,
  infinite: false,
  fade: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="advantages-prev"><img src="assets/images/arrow.svg" alt=""></button>',
  nextArrow: '<button type="button" class="advantages-next"><img src="assets/images/right-arrow.svg" alt=""></button>',
});
