(function (){

	var app = angular.module('jacomeSite', [
    	'ngRoute',
    	'jacomeSite.controllers',
    	'jacomeSite.directives',
			'ngMap'
  	]);
	// 
	// app.run(function($rootScope, $anchorScroll){
	// 	//Scroll hacia arriba cada vez que cambie de ruta
	// 	$rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
	// 	    window.scrollTo(0, 0);
	// 	});
	// })

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.when('/productos', {
				templateUrl: 'views/productos-view.html',
				controller: 'homeController'
			})
			.when('/productos/:categoria/:subcategoria', {
				templateUrl: 'views/productos-view.html',
			})
			.when('/productos/:categoria', {
				templateUrl: 'views/productos-view.html',
			})
			.when('/equipos', {
				templateUrl: 'views/equipos.html',
				controller: 'homeController'
			})
			.when('/contacto', {
				templateUrl: 'views/contacto.html',
				controller: 'homeController'
			})
			.when('/cotizador', {
				templateUrl: 'views/cotizador.html',
				controller: 'homeController'
			})
			.when('/product-item', {
				templateUrl: 'views/product-item.html',
				controller: 'homeController'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();
