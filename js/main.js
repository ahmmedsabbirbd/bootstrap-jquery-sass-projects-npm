(function($){

	jQuery(document).ready(function(){


        // meanmenu
        jQuery('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "9999"
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

        // portfolio active
        $('.portfolio-area').imagesLoaded( function() {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item'
                }
            })

            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({ filter: filterValue });
            });

            //for portfolio menu active class
            $('.portfolio-menu button').on('click', function (event) {
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

        // blog - active
        $('.active-latest-blog').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // testimonial-active
        $('.testimonial-active').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // testimonial-active
        $('.testimonial-active-3').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });


        // brand-active
        $('.brand-active').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // testimonial having two parts / sections
        $('.testimonia-item-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonial-nav'
        });
        $('.testimonial-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonia-item-active',
            dots: false,
            prevArrow:'<button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>',
            centerMode: true,
            focusOnSelect: true,
            centerPadding:0,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                }
            ]
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