'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

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
  nextArrow: '<button type="button" class="advantages-next"><img src="assets/images/right-arrow.svg" alt=""></button>'
});

$(document).ready(function () {
  if ($('body').width() > 1200) {
    $('.jsActiveMenu').mouseenter(function () {
      $('.jsSecondMenu').fadeIn();
    });
    $('.jsSecondMenu').mouseleave(function () {
      $('.jsSecondMenu').fadeOut();
    });
    $('.nav-menu__link').mouseenter(function () {
      $('.jsSecondMenu').fadeOut();
    });
    $(document).click(function (event) {
      if ($(event.target).closest(".jsSecondMenu").length) return;
      $('.jsSecondMenu').fadeOut();
      event.stopPropagation();
    });
    $(document).mouseout(function (event) {
      if ($(event.target).closest(".jsSecondMenu").length || $(event.target).closest(".jsActiveMenu").length) return;
      $('.jsSecondMenu').fadeOut();
      event.stopPropagation();
    });
  } else if ($('body').width() < 1201 && $('body').width() > 576) {
    $('.jsActiveMenu').click(function () {
      $('.jsSecondMenu').fadeToggle();
    });
  } else if ($('body').width() < 577) {
    $('.jsActiveMenu').click(function () {
      $('.jsSecondMenu').fadeToggle().css({ 'display': 'flex' });
      $('.jsActiveMenu').toggleClass('hamb-active');
      $('body').toggleClass('body-overflow');
    });
  }
});

$(document).ready(function () {
  $('.jsPartnersSlider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<button type="button" class="partners-next"><img src="assets/images/arrow.svg" alt=""></button>',
    variableWidth: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

window.onload = function () {
  if (window.innerWidth > 993) {
    $('.jsNewsFlag:lt(' + 3 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 3 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');
    });
  } else if (window.innerWidth < 992 && window.innerWidth > 769) {
    $('.jsNewsFlag:lt(' + 2 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 2 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');
    });
  } else if (window.innerWidth < 768) {
    $('.jsNewsFlag:lt(' + 1 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 1 + ')').fadeIn().css({ 'display': 'flex' }).removeClass('jsNewsFlag');
    });
  }
};

$(document).ready(function () {
  $('.jsServiceSlider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="service-prev"><img src="assets/images/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="service-next"><img src="assets/images/arrow.svg" alt=""></button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
//# sourceMappingURL=script.js.map
