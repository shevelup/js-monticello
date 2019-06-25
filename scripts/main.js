;(function($){
    "use strict";

    $(function(){
        $('.ba-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });
    })
}) (jQuery);


'use strict'
    $(function(){
        $('.news__slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '.ba-slider-arrow__prev',
            nextArrow: '.ba-slider-arrow__next'

        });
    });
