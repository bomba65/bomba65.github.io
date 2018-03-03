window.onload = function(){
    $('.article .slider .slide').gridify({
        srcNode: '.item a',
        margin: '20px',
        width: '240px',
        max_width: '',
        resizable: true,
        transition: 'all 0.5s ease'
    })
};

$(document).ready(function() {
    setTimeout(function() {
        $('.article .slider').animate({
            opacity: 1
        }, 1000);
    }, 300);

    $('.card, button.call').click(function() {
        $('.popup').fadeIn(300);

        $('body').css('overflow', 'hidden');
    })

    $('.popup .row:first-child').click(function() {
        $('.popup').fadeOut(150);

        $('body').css('overflow', 'auto');
    })

    $('.article .slider .slide a').simpleLightbox();
    $('.certificates .container .row:last-child a').simpleLightbox();

    $('.header .list li').on('click', 'a', function() {
        event.preventDefault();

        // Anchor
        var anchor = $(this).attr('href');
        var top = $(anchor).offset().top;
        
        $('#menu').toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('active');
        
        $('body, html').animate({
            scrollTop: top - 100
        }, 800)
    });

    $('button.more').click(function() {
        var data = $(this).attr('data-class');

        $(data).addClass('active')
    });


    // Slider Reviews
    var slidesReviews = $('.reviews .slider .slide');

    slidesReviews.first().before(slidesReviews.last());

    for (var i = 0; i < slidesReviews.length; i++) {
        if (i == 0) {
            $('.reviews ul').append('<li class="active"></li>')
        } else {
            $('.reviews ul').append('<li></li>');
        }
    }

    $('.reviews .slider .next').click(function() {
        var slidesReviews = $('.reviews .slider .slide');
        var activeSlide = $('.reviews .slider .slide.active');

        slidesReviews.last().after(slidesReviews.first());
        activeSlide.removeClass('active').next('.slide').addClass('active');

        rebuild($('.reviews .slider .slide.active').attr('data-index'));
    })
    $('.reviews .slider .prev').click(function() {
        var slidesReviews = $('.reviews .slider .slide');
        var activeSlide = $('.reviews .slider .slide.active');

        slidesReviews.first().before(slidesReviews.last());
        activeSlide.removeClass('active').prev('.slide').addClass('active');

        rebuild($('.reviews .slider .slide.active').attr('data-index'));
    })

    $('#menu').click(function() {
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('active');
    })
});

function rebuild(index) {
    $('.reviews ul li').each(function(i, e) {
        if (i == index) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}
