$(document).ready(function(){
	$('.header__mobile-nav-toggle').on("click", function(e){
		$('.header__mobile-nav').toggleClass("active");
	});
	$('.product__slider').slick({
	  	dots: true,
	  	infinite: true,
	  	arrows: false,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	customPaging: function(slider, i) { 
		    return '<a class="product__slider-tab" style="background-image:url(' + $(slider.$slides[i]).data("bg-image") + ');"></a><span class="product__slider-lens"></span>';
		}
	});
});