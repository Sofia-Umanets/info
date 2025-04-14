$(window).on('load', function() {
    $(".slider").slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToScroll: 3,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});
