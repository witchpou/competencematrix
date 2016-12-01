/**
 * This controller maintains a 'user object and belongs to the view 'user.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.user').controller('userSingleCtrl', userSingleCtrl);
	
	userSingleCtrl.$inject = ['$scope', '$routeParams', 'userConnectorFactory', 'gotoUser'];
	function userSingleCtrl($scope, $routeParams, userConnectorFactory, gotoUser) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoUser = gotoUser;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoUser.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? userConnectorFactory.updateUser : userConnectorFactory.createUser;
			saveFunction(ctrl.user).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.user != null && ctrl.user.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.user = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.user.id) {
					ctrl.user.id = $routeParams.id;
					userConnectorFactory.loadUser(ctrl.user.id).then(setUser, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.user = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setUser(response) {
			ctrl.user = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setUser(response);
				gotoUser.all();
			}
		}
	
	}
})();