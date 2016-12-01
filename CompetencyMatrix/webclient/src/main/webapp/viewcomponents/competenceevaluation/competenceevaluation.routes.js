/** 
 * Navigation and routing for module 'competencymatrixApp..competenceevaluation.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.competenceevaluation').factory('gotoCompetenceEvaluation', gotoCompetenceEvaluation);

	function gotoCompetenceEvaluation($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/competenceevaluation-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/competenceevaluation-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/competenceevaluation-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.competenceevaluation') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/competenceevaluation-all/', {
			controller : 'competenceevaluationAllCtrl',
			controllerAs : 'ctrl',
			title : "competenceevaluation.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceevaluation/competenceevaluation.all.html",
	        resolve: {
	        	competenceevaluationConnectorFactory: competenceevaluationConnectorFactory
	         }
		}).when('/viewcomponents/competenceevaluation-maintain/create/', {
			controller : 'competenceevaluationSingleCtrl',
			controllerAs : 'ctrl',
			title : "competenceevaluation.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceevaluation/competenceevaluation.single.html",
			resolve: {
	        	competenceevaluationConnectorFactory: competenceevaluationConnectorFactory
	         }		
		}).when('/viewcomponents/competenceevaluation-maintain/update/:id', {
			controller : 'competenceevaluationSingleCtrl',
			controllerAs : 'ctrl',
			title : "competenceevaluation.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceevaluation/competenceevaluation.single.html",
	        resolve: {
	        	competenceevaluationConnectorFactory: competenceevaluationConnectorFactory
	         }		
		});
	}]);
})();