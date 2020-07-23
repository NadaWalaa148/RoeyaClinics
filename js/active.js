(function ($) {
    "use strict";
    //===== Prealoder

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    $(document).on('ready', function () {



        // aos int
        AOS.init();


        /*==================================
         # home page one - slide Item Carousel 
         ==================================*/
        $('.clients-nav-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.clients-review-list'
        });

        $('.clients-review-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.clients-nav-list',
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            prevArrow: '<i class="fal fa-arrow-left"></i>',
            nextArrow: '<i class="fal fa-arrow-right"></i>',
        });


        $('.CategorySearch-list').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ],
            prevArrow: '<i class="fal fa-arrow-left"></i>',
            nextArrow: '<i class="fal fa-arrow-right"></i>',
        });


        /*==================================
         # home page two - Testimonial  
         ==================================*/
        $('.testimonail-patients-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.patients-review-items'
        });

        $('.patients-review-items').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.testimonail-patients-list',
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            prevArrow: '<i class="fal fa-arrow-left"></i>',
            nextArrow: '<i class="fal fa-arrow-right"></i>',
        });



        /* ==================================
         # Logo carousel active
        ===================================== */
        $(".brand-logo-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                }
            }
        });

        /* ==================================
         # Blog Two  carousel active
        ===================================== */
        $(".partners-section-carousel-active").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplayTimeout: 5000,
            autoplay: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 1,
                    center: true,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    margin: 30

                },
                // breakpoint from 992 up
                992: {
                    items: 2
                },
                // breakpoint from 992 up
                1200: {
                    items: 3,
                    margin: 30
                }
            }
        });


        /*==========================
           Count up init
        ============================*/
        $('.single-funfact span, .single-round-box span, .single-am-funfact span, .single-funfact-one span').counterUp({
            delay: 20,
            time: 3500
        });


        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*==================================
         # meanmenu active - mobile menu 
         ==================================*/
        $('#responsive-menu').meanmenu({
            meanMenuContainer: '.responsive-menu',
            meanScreenWidth: "991"
        });


        /*==========================
           Scroll To Up init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        // data - background
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        });


        // Sticky Menu
        $(window).scroll(function () {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $(".header-one, .header-two").addClass("sticky");
                }
            } else {
                $(".header-one, .header-two").removeClass("sticky");
            }
        });



    }); // end document ready function
})(jQuery); // End jQuery

$(document).ready(function () {
    hideChat(0);

    $('#prime').click(function () {
        toggleFab();
    });


    //Toggle chat and links
    function toggleFab() {
        $('.prime').toggleClass('zmdi-comment-outline');
        $('.prime').toggleClass('zmdi-close');
        $('.prime').toggleClass('is-active');
        $('.prime').toggleClass('is-visible');
        $('#prime').toggleClass('is-float');
        $('.chat').toggleClass('is-visible');
        $('.fab').toggleClass('is-visible');

    }

    $('#chat_first_screen').click(function (e) {
        hideChat(1);
    });

    $('#chat_second_screen').click(function (e) {
        hideChat(2);
    });

    $('#chat_third_screen').click(function (e) {
        hideChat(3);
    });

    $('#chat_fourth_screen').click(function (e) {
        hideChat(4);
    });

    $('#chat_fullscreen_loader').click(function (e) {
        $('.fullscreen').toggleClass('zmdi-window-maximize');
        $('.fullscreen').toggleClass('zmdi-window-restore');
        $('.chat').toggleClass('chat_fullscreen');
        $('.fab').toggleClass('is-hide');
        $('.header_img').toggleClass('change_img');
        $('.img_container').toggleClass('change_img');
        $('.chat_header').toggleClass('chat_header2');
        $('.fab_field').toggleClass('fab_field2');
        $('.chat_converse').toggleClass('chat_converse2');
        //$('#chat_converse').css('display', 'none');
        // $('#chat_body').css('display', 'none');
        // $('#chat_form').css('display', 'none');
        // $('.chat_login').css('display', 'none');
        // $('#chat_fullscreen').css('display', 'block');
    });

    function hideChat(hide) {
        switch (hide) {
            case 0:
                $('#chat_converse').css('display', 'none');
                $('#chat_body').css('display', 'none');
                $('#chat_form').css('display', 'none');
                $('.chat_login').css('display', 'block');
                $('.chat_fullscreen_loader').css('display', 'none');
                $('#chat_fullscreen').css('display', 'none');
                break;
            case 1:
                $('#chat_converse').css('display', 'block');
                $('#chat_body').css('display', 'none');
                $('#chat_form').css('display', 'none');
                $('.chat_login').css('display', 'none');
                $('.chat_fullscreen_loader').css('display', 'block');
                break;
            case 2:
                $('#chat_converse').css('display', 'none');
                $('#chat_body').css('display', 'block');
                $('#chat_form').css('display', 'none');
                $('.chat_login').css('display', 'none');
                $('.chat_fullscreen_loader').css('display', 'block');
                break;
            case 3:
                $('#chat_converse').css('display', 'none');
                $('#chat_body').css('display', 'none');
                $('#chat_form').css('display', 'block');
                $('.chat_login').css('display', 'none');
                $('.chat_fullscreen_loader').css('display', 'block');
                break;
            case 4:
                $('#chat_converse').css('display', 'none');
                $('#chat_body').css('display', 'none');
                $('#chat_form').css('display', 'none');
                $('.chat_login').css('display', 'none');
                $('.chat_fullscreen_loader').css('display', 'block');
                $('#chat_fullscreen').css('display', 'block');
                break;
        }
    }
});

function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}

AOS.init({
    duration: 1200,
})
$(document).ready(function () {
    $('.accordion a').click(function () {
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
});
