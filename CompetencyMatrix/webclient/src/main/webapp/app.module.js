(function() {
	'use strict';
	/**
	 *  Declare app level module which depends on views, and components.
	 */
	angular.module('competencymatrixApp', [
	    'pascalprecht.translate',
	    //DO NOT DELETE ###BEGIN### include generated files
	'competencymatrixApp.question',
	'competencymatrixApp.competenceprofile',
	'competencymatrixApp.competenceevaluation',
	'competencymatrixApp.answer',
	'competencymatrixApp.competence',
	'competencymatrixApp.competencematrix',
	'competencymatrixApp.user',

		//DO NOT DELETE ###END### include generated files
		'ngRoute'
	]);
	
	/**
	 * Language Configuration via module pascalprecht.translate.
	 */
	angular.module('competencymatrixApp').config(['$translateProvider', function($translateProvider) {
		$translateProvider
		.useStaticFilesLoader({
			prefix: 'localization/translations-',
			suffix: '.json'
		}).preferredLanguage('de-DE')
			.useSanitizeValueStrategy('escaped') // Security for escaping variables
			.usePostCompiling(true); // Post compiling angular filters
	}]);
	
	angular.module('competencymatrixApp').controller('appController', appController);
	
	/**
	 * Controller for global behavior when changing the view (routeChange).
	 * @param $scope
	 * @returns
	 */
	function appController($scope, $http) {
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
			$scope.title=next.title;
			$scope.subtitle=next.subtitle;
		});
		
		$scope.credInput = false;
		$scope.username = "";
		$scope.password = "";
		
		$scope.loginCheck = function() {
			console.log('checking log in status');
			$http.get('check.jsp').then(checkIfUserIsStillLoggedIn, function(){console.log('error')});			
		};
		
		$scope.login = function() {
			console.log($scope);
			$http.get('backend/index.html').then(
					function() {
						console.log('requested start page restricted area');
						console.log('requesting access with ' + $scope.username + ':' + $scope.password);
						$http({
						    method: 'POST',
						    url: 'backend/j_security_check',
						    data: 'j_password=' + $scope.password + '&j_username=' + $scope.password,
						    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						    success: function(resp){console.log(resp); $scope.credInput=false;},
						    error: function(resp){console.log(resp)}
						});
					}
				);

		};
		
		function checkIfUserIsStillLoggedIn(httpResponse) {
			console.log(httpResponse);
			var data = httpResponse.data;
			if(data.indexOf('null') !== -1) {
				console.log('not logged in');
				$scope.credInput = true;
			}
		}
	}

	/**
	 * Factories used globally in competencymatrixApp. 
	 * To keep the scope as small as possible, add factories only used by submodules in the submodule itself.
	 */		
	angular.module('competencymatrixApp').factory('restConnectorFactory', restConnectorFactory);
})();
