(function($){

	jQuery(document).ready(function(){


        // meanmenu
        jQuery('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "9999"
        });

        /*** ScrollDown */
        $('.scrollDown').click(function() {
            var target = $('#primary');
            var space = $(this).data('space');

            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top - space
                }, 1000);
            }
        });
    	 
        /** gallery-slider **/ 
        $('.gallery-slider-active').slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1
        });


        // our menu
        $('.our-menu').imagesLoaded( function() {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: { 
                    columnWidth: '.grid-item'
                }
            })

            $('.filter-button-group').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({ filter: filterValue });
            });

            //for portfolio menu active class
            $('.filter-button-group button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });

        // magnificPopup
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
 
        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	});

}(jQuery));


/*** Google map */
var mapId = document.getElementById("map");

if (mapId) {

	function initMap() {
		var location = { lat: 23.854322, lng: 90.3782046 };

		var mapOptions = { 
	        zoom: 15,
	        center: location,
	        scrollwheel: true,
	        disableDefaultUI: true,

	        styles: [ 
	        {elementType: 'geometry', stylers: [{color: '#F6F6F6'}]},
	        {elementType: 'labels.text.stroke', stylers: [{color: '#F6F6F6'}]},
	        {elementType: 'labels.text.fill', stylers: [{color: '#F6F6F6'}]},
	        {
	          featureType: 'administrative.locality',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi.park',
	          elementType: 'geometry',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi.park',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'geometry',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'geometry.stroke',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#606060'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'geometry',
	          stylers: [{color: '#B3B3B3'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'geometry.stroke',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#CECECE'}]
	        },
	        {
	          featureType: 'transit',
	          elementType: 'geometry',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'transit.station',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#404040'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'geometry',
	          stylers: [{color: '#A0A09A'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#5F5F5F'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'labels.text.stroke',
	          stylers: [{color: '#A0A09A'}]
	        }
	      ]
	    }; 


		var map = new google.maps.Map(mapId, mapOptions) ;

		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
	}
}