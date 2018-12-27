
window.onload = function() {
  if (window.innerWidth > 993) {
    $('.jsNewsFlag:lt(' + 3 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 3 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');
    });
  } else if (window.innerWidth < 992 && window.innerWidth > 769) {
    $('.jsNewsFlag:lt(' + 2 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 2 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');
    });
  } else if (window.innerWidth < 768) {
    $('.jsNewsFlag:lt(' + 1 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');

    $('.jsShowNews').click(function () {
      $('.jsNewsFlag:lt(' + 1 + ')').fadeIn().css({'display': 'flex'}).removeClass('jsNewsFlag');
    });
  }
};
