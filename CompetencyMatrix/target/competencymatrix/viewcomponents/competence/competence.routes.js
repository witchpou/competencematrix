/** 
 * Navigation and routing for module 'competencymatrixApp..competence.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.competence').factory('gotoCompetence', gotoCompetence);

	function gotoCompetence($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/competence-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/competence-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/competence-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.competence') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/competence-all/', {
			controller : 'competenceAllCtrl',
			controllerAs : 'ctrl',
			title : "competence.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/competence/competence.all.html",
	        resolve: {
	        	competenceConnectorFactory: competenceConnectorFactory
	         }
		}).when('/viewcomponents/competence-maintain/create/', {
			controller : 'competenceSingleCtrl',
			controllerAs : 'ctrl',
			title : "competence.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/competence/competence.single.html",
			resolve: {
	        	competenceConnectorFactory: competenceConnectorFactory
	         }		
		}).when('/viewcomponents/competence-maintain/update/:id', {
			controller : 'competenceSingleCtrl',
			controllerAs : 'ctrl',
			title : "competence.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/competence/competence.single.html",
	        resolve: {
	        	competenceConnectorFactory: competenceConnectorFactory
	         }		
		});
	}]);
})();