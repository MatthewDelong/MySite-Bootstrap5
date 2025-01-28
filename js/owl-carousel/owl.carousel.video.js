$('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    autoWidth: true,
    video:true,
    videoWidth:300,
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
            items:3,
            dots: true,
            nav: true,
        }
    }
})