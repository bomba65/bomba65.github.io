$(document).ready(function(){
    $('.carousel').carousel({
      interval: 10000
    });
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
    .not('[href="#carouselExampleIndicators"]')
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
    
    /* Map */
    $(".js--map-almaty").click(function(){
        $(".map-info:first").addClass("active");
        $(".map-info:last").removeClass("active");
        $(".map:first").addClass("active");
        $(".map:last").removeClass("active");
    });
    $(".js--map-pekin").click(function(){
        $(".map-info:first").removeClass("active");
        $(".map-info:last").addClass("active");
        $(".map:first").removeClass("active");
        $(".map:last").addClass("active");
    });
    
    /* Animations on scroll */
    
    $('.section-main .row').waypoint(function() {
        $('.section-main .row').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });
    
    $('.section-services .services').waypoint(function() {
        $('.section-services .services').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.section-features .feature').waypoint(function() {
        $('.section-features .feature').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });
    
    $('.section-reviews .carousel').waypoint(function() {
        $('.section-reviews .carousel').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.map-container').waypoint(function() {
        $('.map-container').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
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



// Get the modal
var modal = document.getElementById('mainModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("js--close-popup")[0];

// Get the button that opens the modal
var btn2 = document.getElementById("showModal-2");
var btn3 = document.getElementById("showModal-3");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks the button, open the modal 

btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}