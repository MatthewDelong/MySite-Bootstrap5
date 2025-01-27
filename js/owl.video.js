$('.owl-carousel').owlCarousel({
    items:1,
    merge:false,
    loop:true,
    margin:10,
    autoWidth: true,
    video:true,
    videoWidth: 300,
    videoHeight:200,
    lazyLoad:false,
    center:true,
    responsive:{
        480:{
            items:1,
            dots: true,
            nav: false,
        },
        600:{
            items:4,
            dots: true,
            nav: false,
        }
    }
})