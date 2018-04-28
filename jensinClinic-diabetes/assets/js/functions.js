$( document ).ready(function() {

  $('.specialists').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="icomoon icon-arrow-left"></span>',
    nextArrow: '<span class="icomoon icon-arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      if($('.navbar-collapse').hasClass('show')) {
          $(this).parents('.navbar-collapse').collapse('hide');
      };
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000)
          return false;
      }
    }
  });

  $('.gallery').magnificPopup({
		delegate: '.gallery-img a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});


  $( document ).ready(function() {
      $( ".faq-question" ).click(function() {
          $(this).parent().toggleClass("active");
          $(this).parent().children(".faq-answer").slideToggle(200);
      });
  });

});

$(document).ready(function () {
    $('input[name="phone"]').inputmask("+9 (999) 999 99 99");

    $('.callbackForm, #callbackForm').submit(function(e) {
        e.preventDefault();
        var nameElement = this.elements.name;
        var phoneElement = this.elements.phone;
        var name = nameElement.value.trim();
        var phone = phoneElement.value.trim();
        var valid = true;
        if (name === '') {
            nameElement.classList.add('no-valid');
            valid = false;
        } else {
            nameElement.classList.remove('no-valid');
        }
        if (phone.indexOf('_') !== -1) {
            phoneElement.classList.add('no-valid');
            valid = false;
        } else {
            phoneElement.classList.remove('no-valid');
        }
        if (!valid) return;

        sendMessage(this, name, phone);

    });

    var sendMessage = function(form, name, phone) {
        var message = '💡Новая заявка от ' + name;
        message += '\n    <i> Телефон: </i> ' + phone;
        message = encodeURIComponent(message);

        $('.ajax-status').html('Отправляем');

        $(form).attr('disabled', true);
        $(form.elements).attr('disabled', true);

        setTimeout(function() {
            $('.ajax-status').html('Отправлено <span class="icon-checkmark" style="display: inline-block;"></span>');
            $('.modal-form').fadeOut(function () {
                $('.modal-thanks').fadeIn(function () {
                    setTimeout(function () {
                        $('#callbackModal').modal('hide');
                        $('.modal-thanks').fadeOut();
                        $('.modal-form').fadeIn();
                        $(form).attr('disabled', false);
                        $(form.elements).attr('disabled', false);
                        $('.ajax-status').html('Оставить заявку');
                    },3000)
                });
            });
        }, 3000);
    }
});


var hero
    , sections = $('section')
    , nav = $('nav');

$(window).on('scroll', function () {
  var nav_height = nav.outerHeight();
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height-1,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
