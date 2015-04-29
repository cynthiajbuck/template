(function($) {
    
    function all(){
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

        //MASONRY
        var $container = $('.news').masonry();
        $container.imagesLoaded( function() {
            $container.masonry({
                columnWidth: ".grid-sizer",
                itemSelector: ".news-item",
                gutter: ".gutter-sizer",
                percentPosition: true
            });
        });
        
        //maps
        var map;
        var isDraggable = true;
        if($('.map').height() == 200){
            var isDraggable = false;
        }
		function initialize() {
			var acme = new google.maps.LatLng(40.725080, -73.999062);
			var mapOptions = {
				zoom: 13,
				scrollwheel: true,
				disableDefaultUI: true,
				center: acme,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				draggable: isDraggable,
                styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]
			};
			map = new google.maps.Map(document.getElementById('map'),mapOptions);
			var marker = new google.maps.Marker({
				position: acme,
				map: map,
				title: 'ACME Studio'
			});
		}
        initialize();            
    }
    all();
    
    //PAGE TRANSITION
    'use strict';
    var $body = $('html, body'),
        content = $('#main').smoothState({
        onStart: {
            duration: 300,
            render: function (url, $container){
                content.toggleAnimationClass('is-exiting');
                $body.animate({
                    scrollTop: 0
                });
            }
        },
        onProgress: {
            duration: 0,
            render: function (url, $container) {
                $('.anim').hide();
            }
        },
        callback : function(url, $container, $content) { 
            $('.anim').show();
            all();
        }
      }).data('smoothState');
    
}(jQuery));


/* MOBILE ============ */
$(window).on('load resize', function(){
    if($(window).width() < 720 ){
        $('nav').css('display', '');
    }
});