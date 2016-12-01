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
	function appController($scope) {
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
			$scope.title=next.title;
			$scope.subtitle=next.subtitle;
		});
	}

	/**
	 * Factories used globally in competencymatrixApp. 
	 * To keep the scope as small as possible, add factories only used by submodules in the submodule itself.
	 */		
	angular.module('competencymatrixApp').factory('restConnectorFactory', restConnectorFactory);
})();
