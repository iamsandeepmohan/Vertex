

$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });
});

//Animation on scroll
//------------------------------
$(function () {

    new WOW().init();

});


//    Popup Image
//----------------------------
$(function () {

    $('.popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//Carosal for Members
//-------------------------

$(function () {

    $(".our-team").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        animateIn: true,
        smartSpeed: 700,
        responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
    },
    // breakpoint from 480 up
    480 : {
        items: 2,
    },
    // breakpoint from 768 up
    768 : {
        items: 3,
    }
}
    });
});

//Carosal for Testimonials
//-------------------------

$(function () {

    $(".our-customer").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed: 800
    });
});


//Counter for Stats
//-------------------------

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });

});



//Carosal for Clients
//-------------------------

$(function () {

    $(".our-client").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
    },
    // breakpoint from 480 up
    480 : {
        items: 2,
    },
    // breakpoint from 768 up
    768 : {
        items: 3,
    }
}
        
    });
});


// Close mobile menu on click
$(function () {

    $(".navbar-light .navbar-nav .nav-link").on("click touch", function () {

        $(".navbar-toggler").click();
    });
});


// Show/Hide transparent black navigation and Back button
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("mydark");
            $("#back-btn").fadeOut();

        } else {
            // show nav
            $("nav").addClass("mydark");
            $("#back-btn").fadeIn();
        }
    });
});


//loder

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})