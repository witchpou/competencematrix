/** 
 * Navigation and routing for module 'competencymatrixApp..question.
 */
(function() {
'use strict';

	angular.module('competencymatrixApp.question').factory('gotoQuestion', gotoQuestion);

	function gotoQuestion($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/question-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/question-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/question-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('competencymatrixApp.question') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/question-all/', {
			controller : 'questionAllCtrl',
			controllerAs : 'ctrl',
			title : "question.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/question/question.all.html",
	        resolve: {
	        	questionConnectorFactory: questionConnectorFactory
	         }
		}).when('/viewcomponents/question-maintain/create/', {
			controller : 'questionSingleCtrl',
			controllerAs : 'ctrl',
			title : "question.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/question/question.single.html",
			resolve: {
	        	questionConnectorFactory: questionConnectorFactory
	         }		
		}).when('/viewcomponents/question-maintain/update/:id', {
			controller : 'questionSingleCtrl',
			controllerAs : 'ctrl',
			title : "question.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/question/question.single.html",
	        resolve: {
	        	questionConnectorFactory: questionConnectorFactory
	         }		
		});
	}]);
})();