$(window).on("load", function() {
	$(".loader").fadeOut(1000);

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });   
});

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	});
	
	var typed = new Typed(".typed", {
		strings: ["Aiming to be a FULLSTACK Developer,", "In Web Development."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:4,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        480:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        938:{
		            items:4
		        },
		    },
		});
		$('.play').on('click',function(){
		    owl.trigger('play.owl.autoplay',[1000])
	});
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
	});

    var skillsTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;

    $(window).scroll(function() {
    	if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
    		$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
		    });
    	}

    	if (window.pageYOffset > statsTopOffset - $(window).height() + 300) {
    		$('.counter').each(function() {
			  var $this = $(this),
			      countTo = $this.attr('data-count');
			  
			  $({ countNum: $this.text()}).animate({
			    countNum: countTo
			  },

			  {

			    duration: 3000,
			    easing:'linear',
			    step: function() {
			      $this.text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      $this.text(this.countNum);
			      //alert('finished');
			    }
			  });
			});
    	}
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	$(".items").isotope({
	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

    	return false;

    });

    $("#navigation li a").click(function(e) {
    	e.preventDefault();

    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;

    	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

    	var body = $("body");

    	if ($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	} else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
    	}

    };

    $('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});

});



