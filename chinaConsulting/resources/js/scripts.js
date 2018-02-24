$(document).ready(function(){
    $('.carousel').carousel({
      interval: 10000
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
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top -70
            }, 1000)
              return false;
          }
        }
      });
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--nav-body');
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })
});

var hero
    , sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$(window).on("resize", function () {
    if ($(window).width() > 767) {
        $('.js--nav-body').css('display','');
    } 
    else {
        $('.js--nav-icon i').addClass('ion-navicon-round');
        $('.js--nav-icon i').removeClass('ion-close-round');
    }
}).resize();