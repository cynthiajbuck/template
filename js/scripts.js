(function($) {
    //MOBILE-NAV
    $('.toggle').click(function(){
        $('nav').fadeToggle();
        $(this).toggleClass('open');
    });
    
    //HOME-SLIDER
    $('.slider').owlCarousel({
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        loop: true,
        responsive: {
            0:{
                items: 1,
            },
            1100:{
                items: 2
            }
        }
    });
    
    //PROJECT-SLIDER
    $('.project-slider').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: false,
        navText: '‹›',
        navRewind: false
    });
    
    //ABOUT-SLIDER
    $('.about-slider').owlCarousel({
        items: 3,
        dots: false,
        nav: false
    });
}(jQuery));


/* MOBILE ============ */
$(window).on('load resize', function(){
    if($(window).width() < 720 ){
        $('nav').css('display', '');
    }
});