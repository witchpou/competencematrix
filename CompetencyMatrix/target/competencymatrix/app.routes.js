/** 
 * Navigation and routing for module ljprojectbuilderApp.
 */
angular.module('competencymatrixApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/viewcomponents/home/', {
		title : "home.title",
		subtitle : "",
		templateUrl : "viewcomponents/home.html"
	})	.otherwise({redirectTo: '/viewcomponents/home/'});
}]);
