$(document).ready(function() {
	$('.js-price__slider').slick({
dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
	
	$('.js-review__slider').slick({
		dots: true,
		nextArrow: '.reviev-slider__next',
		prevArrow: '.reviev-slider__prev'
	});
	
});