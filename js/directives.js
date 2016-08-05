(function(){

	angular.module('jacomeSite.directives', [])

		//HEADER
		.directive('header', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/header.html',
				controller: function($document){
					$('.menu-icon').click(function(){
					 $('.menu-options-mobile').toggleClass('active-menu hidden-menu');
					 $('li.option-item').toggleClass('show-item hidden-item');
					 $('.menu-icon').toggleClass('close-icon open-icon');
						 if ($(window).width() <= 1000){
						 		$('.title-banner').toggleClass('active-title hidden-title');
						 	}
					});


					$('li.option-item').click(function(){
						 if ($(window).width() <= 1000){
					 			$('.menu-options-mobile').toggleClass('active-menu hidden-menu');
					 			$('li.option-item').toggleClass('show-item hidden-item');
						 		$('.title-banner').addClass('hidden-title');
						 		$('.title-banner').toggleClass('active-title hidden-title');
					 			$('.menu-icon').toggleClass('close-icon open-icon');
						 	}
					});
				}
			};
		})

		//FOOTER
		.directive('footerBottom', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/footer-bottom.html',
				controller: function($document){

				}
			};
		})

		//HOME
		.directive('home', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/home.html',
				controller: function($document){
				}
			};
		})

		//SECCION PRODUCTOS
		.directive('productos', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/productos.html',
				controller: function($document){
					//SLIDER SETTINGS
					var swiper = new Swiper('.swiper-container', {
				    slidesPerView: 3,
				    slidesPerColumn: 2,
				    spaceBetween: 30,
						pagination: '.swiper-pagination',
						paginationClickable: true,
						breakpoints: {
					    640: {
					      slidesPerView: 2,
					      spaceBetweenSlides: 30,
			    			spaceBetween: 5
					    }
					  }
				  });

				//SLIDE DOWN SCRIPT
				if ($(window).width() >= 1001){
					$('.category-name').click(function(e){
						$(e.currentTarget).parent().find('li.sub-item').toggleClass('show-category hide-category')
						$(e.currentTarget).parent().find('span.icon-category').toggleClass('downside-icon upside-icon')
					});
				}

				if ($(window).width() <= 1000){
					$('.category-name').click(function(e){
						$('li.sub-item').removeClass('show-category')
						$('li.sub-item').addClass('hide-category')
	 					$(e.currentTarget).parent().find('li.sub-item').removeClass('hide-category')
	 					$(e.currentTarget).parent().find('li.sub-item').addClass('show-category')
	 					$(e.currentTarget).parent().find('span.icon-category').addClass('downside-icon')
	 					$(e.currentTarget).parent().find('.category-name').addClass('selected-category')
					});

				}


				}
			};
		})

		//SECCION EQUIPOS
		.directive('equipment', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/equipment.html',
				controller: function($document){

				}
			};
		})

		//SECCION CONTACTO
		.directive('contactForm', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/contact-form.html',
				controller: function($document){
				}
			};
		})

		//SECCION COTIZADOR
		.directive('cotizadorForm', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/cotizador-form.html',
				controller: function($document){
				}
			};
		})

		//SECCION DE DESCRIPCION PRODUCTO
		.directive('productItem', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/product-item.html',
				controller: function($document){
			    var swiper = new Swiper('.swiper-small',{
						pagination: '.small-pagination',
	          paginationClickable: true,
						loop: true
					});
				}
			};
		})


})();
