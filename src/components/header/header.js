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
      if ($(event.target).closest(".jsSecondMenu").length)
        return;
      $('.jsSecondMenu').fadeOut();
      event.stopPropagation();
    });
    $(document).mouseout(function (event) {
      if ($(event.target).closest(".jsSecondMenu").length || $(event.target).closest(".jsActiveMenu").length)
        return;
      $('.jsSecondMenu').fadeOut();
      event.stopPropagation();
    });
  } else if ($('body').width() < 1201 && $('body').width() > 576) {
    $('.jsActiveMenu').click(function () {
      $('.jsSecondMenu').fadeToggle();
    });
  } else if ($('body').width() < 577) {
    $('.jsActiveMenu').click(function () {
      $('.jsSecondMenu').fadeToggle().css({'display': 'flex'});
      $('.jsActiveMenu').toggleClass('hamb-active');
      $('body').toggleClass('body-overflow');
    });
  }
});
