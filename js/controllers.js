(function(){

	angular.module('jacomeSite.controllers', [])

		.controller('homeController', ['$scope', function($scope){
		}])

		.controller('homeSliderController', ['$scope', function($scope){
				$('.logo-header svg').on('click', function(){
					$('li.option-item a').removeClass('selected');
				})
		}])

		//resaltar la opcion del menu resaltado
		.controller('itemSelectedController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location ){
			$scope.routeParams = $location.path();
			switch ($scope.routeParams) {
				case '/': $scope.itemselected = 0;  break;
				case '/productos': $scope.itemselected = 1;  break;
				case '/equipos': $scope.itemselected = 2;  break;
				case '/contacto': $scope.itemselected = 3;  break;
				case '/cotiza': $scope.itemselected = 4;  break;
			}
			$scope.changerute = function(item){
				$scope.itemselected = item;
			}
		}])


})();
