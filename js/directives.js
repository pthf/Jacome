(function(){

	angular.module('jacomeSite.directives', [])

		//HEADER
		.directive('header', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/header.html',
				controller: function($document){
					//Funcion menu en moviles, ocultar y mostrar el menu
					$('.menu-icon').click(function(){
					 $('.logo-header').addClass('option-item');
					 $('.menu-options-mobile').toggleClass('active-menu hidden-menu');
					 $('li.option-item').toggleClass('show-item hidden-item');
					 $('.menu-icon').toggleClass('close-icon open-icon');
						 if ($(window).width() <= 1000){
						 		$('.title-banner').toggleClass('active-title hidden-title');
						 	}
					});

					//Funcion al cambio de pagina al seleccionar una opcion del menu en moviles, cerra el menu
					$('.option-item').click(function(){
						 if ($(window).width() <= 1000){
					 			$('.menu-options-mobile').toggleClass('active-menu hidden-menu');
					 			$('li.option-item').toggleClass('show-item hidden-item');
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
					//Parametros del slider
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

				//Rotar el icono del triangulo
					$('.category-name').click(function(e){
						$(e.currentTarget).parent().find('li.sub-item').toggleClass('show-category hide-category')
						$(e.currentTarget).parent().find('span.icon-category').toggleClass('downside-icon upside-icon')
					});
				}
			};
		})

		//SECCION EQUIPOS
		.directive('equipment', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/equipment.html',
				controller: function($document){

					$('.equipo-item').click(function(){
					 $('.equipos-modal').removeClass('hide-modal');
					 $('.equipos-modal').addClass('show-modal');
					 $('html, body').animate({
							 scrollTop: $(".quien-top").offset().top
					 }, 300);
					});

					//Cerrar el modal de la seccion de equipos
					$( ".close-icon-modal" ).click(function() {
						$('.equipos-modal').addClass('hide-modal');
						$('.equipos-modal').removeClass('show-modal');
					});
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
					//Menus en la seccion de productos
					$('.title-table').click(function(e){
						$(e.currentTarget).parent().find('li.sub-item').toggleClass('show-category hide-category')
						$(e.currentTarget).parent().find('span.icon-category').toggleClass('downside-icon upside-icon')
					});
					//Mostrar o ocultar la tabla
				  $( ".title-table" ).click(function() {
				   $('.table-wrapper').toggleClass('show-table hidden-table');
				  });

				}
			};
		})


})();
