(function (){

	var app = angular.module('jacomeSite', [
    	'ngRoute',
    	'jacomeSite.controllers',
    	'jacomeSite.directives',
			'ngMap'
  	]);

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();
