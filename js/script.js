$(document).ready(function() {
	$('.js-price__slider').slick({
		nextArrow: '.pack-slider__next',
		prevArrow: '.pack-slider__prev',
dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
	});
	
	$('.js-review__slider').slick({
		dots: true,
		nextArrow: '.reviev-slider__next',
		prevArrow: '.reviev-slider__prev'
	});
	$('.main-menu--mobile').click( function(){
		$(this).toggleClass('active');
		$('.main-menu__list').toggleClass('active');
	});
	
	$('.js-about__slider').slick({
dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
   
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
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
	
	$("#request-form").submit(function(){
     $("#request-form").css("display","none");
	 $("#request-form--success").css("display","block");
	 return false;
});
	$("#region-form").submit(function(){
		 $("#region-form").css("display","none");
		 $("#region-form--success").css("display","block");
		  return false;
	});
});