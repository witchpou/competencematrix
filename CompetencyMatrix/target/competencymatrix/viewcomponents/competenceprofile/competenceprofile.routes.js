/** 
 * Navigation and routing for module 'competencymatrixApp..competenceprofile.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.competenceprofile').factory('gotoCompetenceProfile', gotoCompetenceProfile);

	function gotoCompetenceProfile($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/competenceprofile-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/competenceprofile-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/competenceprofile-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.competenceprofile') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/competenceprofile-all/', {
			controller : 'competenceprofileAllCtrl',
			controllerAs : 'ctrl',
			title : "competenceprofile.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceprofile/competenceprofile.all.html",
	        resolve: {
	        	competenceprofileConnectorFactory: competenceprofileConnectorFactory
	         }
		}).when('/viewcomponents/competenceprofile-maintain/create/', {
			controller : 'competenceprofileSingleCtrl',
			controllerAs : 'ctrl',
			title : "competenceprofile.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceprofile/competenceprofile.single.html",
			resolve: {
	        	competenceprofileConnectorFactory: competenceprofileConnectorFactory
	         }		
		}).when('/viewcomponents/competenceprofile-maintain/update/:id', {
			controller : 'competenceprofileSingleCtrl',
			controllerAs : 'ctrl',
			title : "competenceprofile.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/competenceprofile/competenceprofile.single.html",
	        resolve: {
	        	competenceprofileConnectorFactory: competenceprofileConnectorFactory
	         }		
		});
	}]);
})();