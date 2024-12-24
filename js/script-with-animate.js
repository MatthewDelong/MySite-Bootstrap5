    /* Only works with 1 slide at a time so items must stay at 1 */
    /* Animate site for animate options https://animate.style/ */
    
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 1,
        nav: true,
        loop: true,
       animateIn: 'flipInY',
       animateOut: 'zoomOutDown'
});
