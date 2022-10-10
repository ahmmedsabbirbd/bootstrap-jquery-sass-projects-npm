(function($){

	jQuery(document).ready(function(){

		/*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header").addClass("stop");
			} else {
				$(".header").removeClass("stop");
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
			scrollTop: target.offset().top - 76
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
    	 

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});  

		/*** AOS */
		AOS.init({
			once: true,
			offset: -300,
			duration: 900,
		});

		/*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });

		/*** enable lightbox */
		$('.popup-video').magnificPopup({
			type: 'iframe',
			preloader: false,
			fixedBgPos: true,
			removalDelay: 500,
			fixedContentPos: true,
			callbacks: {
				beforeOpen: function() { 
					this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
		});

		/*** enable lightbox */
		$('.zoom-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="our-categories__item" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});

		/*** categories-slider Slider */
    	var $categories_slider;
		$categories_slider = $('.categories-slider');
		$categories_slider.slick({
			autoplay: true,
			speed: 300, 
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 2,
			initialSlide: 1, 
			slidesToScroll: 1,
			centerMode: true,
  			centerPadding: '300px 0 0',
			  responsive: [
				{
					breakpoint: 992,
					  	settings: {
						centerPadding: '220px 0 0',
					}
				},
				{
					breakpoint: 801,
					  	settings: {
							slidesToShow: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							centerPadding: '180px 0 0',
							slidesToShow: 1
					}
				},
				{
					breakpoint: 576,
					  	settings: {
						centerPadding: '180px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 481,
					  	settings: {
						centerPadding: '100px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 381,
					  	settings: {
						centerPadding: '60px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 351,
					  	settings: {
						centerPadding: '40px 0 0',
						slidesToShow: 1
					}
				}
			]
		})

		/*** lastNobullet */
		function lastNobullet() {
			var lastElement = false;
			$(".social-profile ul li").each(function() {
				if (lastElement && lastElement.offset().top != $(this).offset().top) {
					$(lastElement).addClass("no_bullet");
				} else {
					$(lastElement).removeClass("no_bullet");
				}
				lastElement = $(this);
			}).last().addClass("no_bullet");
		};
		lastNobullet();

		$(window).resize(function(){
			lastNobullet();
		});

		/*** gsap */

		/*** banner-area__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-area__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: 3,
                pin: true
            }
        })
		.from(".banner-area__gsap .sub-title", { 
			opacity: 0,
			scale: 0, 
			x : innerWidth * -0.5,
		})
		.from(".banner-area__gsap .banner-area__media", { 
			opacity: 0,
			scale: 0, 
			x : innerWidth * 0.5,
		})
		.from(".banner-area__gsap .title", { 
			opacity: 0,
			scale: 0, 
			x : innerWidth * -0.5,
		})
		.from(".banner-area__gsap .description", { 
			opacity: 0,
			scale: 0, 
			x : innerWidth * -0.5,
		})
		.from(".banner-area__gsap .btn-wrapper", { 
			scale: 0,
			opacity: 0,
			x : innerWidth * -0.5,
		})
		.from(".banner-area__gsap .starting-from__wrapper", { 
			opacity: 0,
			scale: 0, 
			y : innerWidth * 0.5,
		})

		/*** video-area__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".video-area__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: 3,
                pin: true
            }
        })
		.from(".video-area__gsap .video-area__wrapper", { scale: 0, opacity: 0 } )
		.from(".video-area__gsap .btn-wrapper", { scale: 0 } )

		/*** cta__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".cta__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: 3,
                pin: true
            }
        })
		.from(".cta__gsap", { scale: 0, opacity: 0 } )
		.from(".cta__gsap .title", { x : innerWidth * -1 } )
		.from(".cta__gsap .form", { scale: 0,  y : innerWidth * 0.5 } )
		 
		
	});

}(jQuery));