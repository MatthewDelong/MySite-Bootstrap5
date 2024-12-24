/* To use Animate/Transistions then use script-with-animate and change at the bottom of index.html */

$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 6,
  nav: true,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false,
    },
    485: {
      items: 2,
      dots: false,
      nav: false,
    },
    728: {
      items: 3,
      dots: false,
      nav: true,
    },
    960: {
      items: 4,
      dots: false,
      nav: true,
    },
  },
});
