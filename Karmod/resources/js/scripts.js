$(document).ready(function(){
    
    $('nav').waypoint(function(direction){
        if (window.matchMedia("(min-width: 768px)").matches) {
            if (direction == "down") {
                $('.nav-body').addClass('sticky');
                $('.technical-nav ul').addClass('sticky');
                $("nav hr").css( { marginBottom : "72px"} );
                $( ".nav-body" ).hide();
                $( ".nav-body" ).slideDown( "slow", function() {
                    // Animation complete.
                  });
            } else {
                $("nav hr").css( { marginBottom : "0"} );
                $('.technical-nav ul').removeClass('sticky');
                $('.nav-body').removeClass('sticky');
                $( ".nav-body" ).show();
            }    
        }
    }, {
        offset: '-80px'
    });
    /*
    $(window).resize(function(){
       if (window.matchMedia("(max-width: 768px)").matches) {
            if (direction == "down") {
                $('.nav-body').addClass('sticky');
                $("nav hr").css( { marginBottom : "72px"} );
                $( ".nav-body" ).hide();
                $( ".nav-body" ).slideDown( "slow", function() {
                    // Animation complete.
                  });
            } else {
                $("nav hr").css( { marginBottom : "0"} );
                $('.nav-body').removeClass('sticky');
                $( ".nav-body" ).show();
            }    
        }
    })*/ 
    
    //Gallery Popup
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
    .not('[href="#carouselExampleIndicators"]')
      .click(function(event) {
        
        if ($(window).width() < 768) {
            var nav = $('.js--nav-body');
            var icon = $('.js--nav-icon i')
            nav.slideUp(200);
            $('nav .nav-phones').slideUp(200);
            $('nav .social-icons').slideUp(200);
            $('nav hr').slideUp(200);
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
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
              scrollTop: target.offset().top -72
            }, 1000)
              return false;
          }
        }
      });
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--nav-body');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        $('nav .nav-phones').slideToggle(200);
        $('nav .social-icons').slideToggle(200);
        $('nav hr').slideToggle(200);
        
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
    , nav_height = nav.outerHeight()

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="./index.html#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

var hero1
    , sections1 = $('.technical-info')
    , nav1 = $('nav')
    , nav_height1 = nav1.outerHeight()

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections1.each(function() {
    var top = $(this).offset().top - nav_height1,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      $('.technical-nav').find('a').parent().removeClass('active');
      sections1.removeClass('active');
      
      $(this).addClass('active');
      $('.technical-nav').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});


// Set the date we're counting down to
var countDownDate = new Date("May 5, 2018 15:37:25").getTime();
if(document.getElementById("discount-counter")) {
    
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Output the result in an element with id="demo"
    document.getElementById("discount-counter").innerHTML = days + "<span>д</span>&nbsp;" + hours + "<span>ч</span>&nbsp;:&nbsp;"
    + minutes + "<span>м</span>&nbsp;:&nbsp;" + seconds + "<span>с</span> ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
}

$(window).on("resize", function () {
    if ($(window).width() > 767) {
        $('.js--nav-body').css('display','');
    } 
    else {
        $('.js--nav-icon i').addClass('ion-navicon-round');
        $('.js--nav-icon i').removeClass('ion-close-round');
        $('.js--nav-body').removeClass('sticky');
        $("nav hr").css( { marginBottom : "0"} );
    }
}).resize();