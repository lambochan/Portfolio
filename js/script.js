$(document).ready(function(){
    window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }; 
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
	})
		$('.stop').on('click',function(){
		    owl.trigger('stop.owl.autoplay')
	})

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

});



