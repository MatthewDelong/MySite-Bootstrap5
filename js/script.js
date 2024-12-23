     $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 6,
        singleItem: 1,
        nav: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0 : {
                items: 1,
                dots: false,
                nav: false
            },
            485: {
                items: 2,
                dots: false,
                nav: false
            },
            728: {
                items: 3,
                dots: false,
                nav: true
            }, 
            960: {
                items: 4,
                dots: false,
                nav: true
            },
            1200: {
                items: 5,
                dots: false,
                nav: true
            }
        }
});
