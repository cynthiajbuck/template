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
        controls: false,
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
}(jQuery));


/* MOBILE ============ */
$(window).on('load resize', function(){
    if($(window).width() < 720 ){
        $('nav').css('display', '');
    }
});