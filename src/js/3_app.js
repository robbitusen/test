$(document).ready(function(){

	/******
	 * INIT
	 */
	new WOW().init();
	
	/*****************
	 * PRODUCT SECTION 
	 */
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
	$('.product__color-select label').on("click", function(){

		//Emboss current colour label
		$('.product__color-select').find('label').each(function(){
			$(this).removeClass("active");
		})
		$(this).addClass("active");

		//Update In Stock Label
		var id = "#" + $(this).attr('for');
		var data = $(id).data('in-stock');
		if (data == true) {
			$('.product__in-stock').removeClass("disabled").html("In Stock");
		} else {
			$('.product__in-stock').addClass("disabled");
			setTimeout(function(){
				$('.product__in-stock').html("Out of Stock");
			}, 300);
		}

		//Display colour.
		var color = $(this).find('.product__tooltip').html();
		$('.product__color-name').css("width", 0);
		$('.product__color-name').html(color);

	});

	/********
	 * HEADER 
	 */
	$('.header__mobile-nav-toggle').on("click", function(e){
		$('.header__mobile-nav').toggleClass("active");
	});
	$('.header__search a').on("click", function(){
		$('.header__search-wrap').toggleClass("header__search--toggled");
	});
	$('.header__cart a').on("click", function(){
		console.log("clicked");
		$('.header__basket-modal').toggleClass("header__basket-modal--active");
	});
	window.onclick = function(event) {
		var className = $(event.target).attr("class");
	    if (className == "header__search-wrap header__search--toggled") {
	        $('.header__search-wrap').toggleClass("header__search--toggled");
	    }
	    className = $(event.target).attr("class");
	    if (className == "header__basket-modal header__basket-modal--active") {
	        $('.header__basket-modal').toggleClass("header__basket-modal--active");
	    }
	}


	/********
	 * BASKET
	 */
	$('.product__basket-add').on("click", function()) {
		$('.header__basket-items').find("header__basket-item").each(function(i, v){
			console.log(this);
		});
	}

});