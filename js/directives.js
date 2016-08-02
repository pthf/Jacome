(function(){

	angular.module('jacomeSite.directives', [])

		.directive('header', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/header.html',
				controller: function($document){
					$('.menu-icon').click(function(){
					 $('.menu-options-mobile').toggleClass('active-menu hidden-menu');
					 $('li.option-item').toggleClass('show-item hidden-item');
						 if ($(window).width() <= 1000){
						 		$('.title-banner').toggleClass('active-title hidden-title');
						 	}
					});
				}
			};
		})

		.directive('footerBottom', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/footer-bottom.html',
				controller: function($document){

				}
			};
		})

		.directive('home', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/home.html',
				controller: function($document){
				}
			};
		})



})();
