/** 
 * Navigation and routing for module 'competencymatrixApp..answer.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.answer').factory('gotoAnswer', gotoAnswer);

	function gotoAnswer($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/answer-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/answer-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/answer-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.answer') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/answer-all/', {
			controller : 'answerAllCtrl',
			controllerAs : 'ctrl',
			title : "answer.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/answer/answer.all.html",
	        resolve: {
	        	answerConnectorFactory: answerConnectorFactory
	         }
		}).when('/viewcomponents/answer-maintain/create/', {
			controller : 'answerSingleCtrl',
			controllerAs : 'ctrl',
			title : "answer.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/answer/answer.single.html",
			resolve: {
	        	answerConnectorFactory: answerConnectorFactory
	         }		
		}).when('/viewcomponents/answer-maintain/update/:id', {
			controller : 'answerSingleCtrl',
			controllerAs : 'ctrl',
			title : "answer.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/answer/answer.single.html",
	        resolve: {
	        	answerConnectorFactory: answerConnectorFactory
	         }		
		});
	}]);
})();