
$(function () {
    $('.galery-carusel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    })

    $('.popular-carusel').owlCarousel({
        loop: true,
        nav: true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        items: 1
    })
});