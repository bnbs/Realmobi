$(document).ready(function () {
    $('.slick').slick({
        nextArrow: "<button class='toggle'>&#10095;</button>",
        prevArrow: "<button class='toggle'>&#10094;</button>",
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1312,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 984,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 688.1,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});