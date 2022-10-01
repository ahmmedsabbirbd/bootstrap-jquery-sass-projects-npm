(function($){

	jQuery(document).ready(function(){

		/*** AOS */
		AOS.init({
			once: true,
			offset: -300,
			duration: 900,
		});

		/*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header-area").addClass("stop");
			} else {
				$(".header-area").removeClass("stop");
			}
		});

		/*** Sticky header */
		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) 
			{
				body.classList.remove(scrollUp);
				return;
			}

			if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
			{
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
			} 
			else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
			{
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);
			}

			lastScroll = currentScroll;
		});

		/*** Scroll Nav */
		var link = $('.main-menu ul li a');
 
		link.on('click', function(e) {
			var target = $($(this).attr('href'));
			$('html, body').animate({
			scrollTop: target.offset().top - 100
			}, 600); 
			$(this).parent().addClass('active');
			e.preventDefault();
		});
 
		$(window).on('scroll', function(){
			scrNav();
		});

		function scrNav() {
			var sTop = $(window).scrollTop();
			$('section').each(function() {
				var id = $(this).attr('id'),
					offset = $(this).offset().top-1,
					height = $(this).height();
				if(sTop >= offset && sTop < offset + height) {
					link.parent().removeClass('active');
					$('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
				}
			});
		}
		scrNav();

		/*** mobile menu  */
		$(".hamburger-menu").on("click", function () {
			$(".side-info").toggleClass("info-open");
			$(".offcanvas-overlay").toggleClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});  

        /*** ScrollDown */
        $('.scrollDown').click(function() {
            var target = $($(this).data('target'));
            var space = $(this).data('space');

            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top - space
                }, 500);
            }
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