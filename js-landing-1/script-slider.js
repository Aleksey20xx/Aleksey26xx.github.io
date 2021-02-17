$(document).ready(function() {
    $('.slider-offers').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
})  
