/** 
 * Navigation and routing for module 'competencymatrixApp..competencematrix.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.competencematrix').factory('gotoCompetenceMatrix', gotoCompetenceMatrix);

	function gotoCompetenceMatrix($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/competencematrix-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/competencematrix-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/competencematrix-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.competencematrix') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/competencematrix-all/', {
			controller : 'competencematrixAllCtrl',
			controllerAs : 'ctrl',
			title : "competencematrix.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/competencematrix/competencematrix.all.html",
	        resolve: {
	        	competencematrixConnectorFactory: competencematrixConnectorFactory
	         }
		}).when('/viewcomponents/competencematrix-maintain/create/', {
			controller : 'competencematrixSingleCtrl',
			controllerAs : 'ctrl',
			title : "competencematrix.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/competencematrix/competencematrix.single.html",
			resolve: {
	        	competencematrixConnectorFactory: competencematrixConnectorFactory
	         }		
		}).when('/viewcomponents/competencematrix-maintain/update/:id', {
			controller : 'competencematrixSingleCtrl',
			controllerAs : 'ctrl',
			title : "competencematrix.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/competencematrix/competencematrix.single.html",
	        resolve: {
	        	competencematrixConnectorFactory: competencematrixConnectorFactory
	         }		
		});
	}]);
})();