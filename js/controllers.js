(function(){

	angular.module('jacomeSite.controllers', [])

		.controller('homeController', ['$scope', function($scope){

		}])

		.controller('itemSelectedCheckController', ['$scope', '$routeParams', function($scope, $routeParams){
			$scope.itemSelected = $routeParams.categoria;
		}])

})();
