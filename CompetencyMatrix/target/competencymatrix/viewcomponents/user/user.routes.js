/** 
 * Navigation and routing for module 'competencymatrixApp..user.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.user').factory('gotoUser', gotoUser);

	function gotoUser($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/user-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/user-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/user-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.user') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/user-all/', {
			controller : 'userAllCtrl',
			controllerAs : 'ctrl',
			title : "user.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/user/user.all.html",
	        resolve: {
	        	userConnectorFactory: userConnectorFactory
	         }
		}).when('/viewcomponents/user-maintain/create/', {
			controller : 'userSingleCtrl',
			controllerAs : 'ctrl',
			title : "user.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/user/user.single.html",
			resolve: {
	        	userConnectorFactory: userConnectorFactory
	         }		
		}).when('/viewcomponents/user-maintain/update/:id', {
			controller : 'userSingleCtrl',
			controllerAs : 'ctrl',
			title : "user.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/user/user.single.html",
	        resolve: {
	        	userConnectorFactory: userConnectorFactory
	         }		
		});
	}]);
})();