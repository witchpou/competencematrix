/**
 * This controller facilitates the user.all.html - view to display all users. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.user').controller('userAllCtrl', userAllCtrl);
	userAllCtrl.$inject = ['userConnectorFactory', 'gotoUser'];
	function userAllCtrl(userConnectorFactory, gotoUser) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteUser = deleteUser;
		ctrl.gotoUser = gotoUser;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.userAll = [];
			ctrl.user = {};
			ctrl.idSelected = null;
			userConnectorFactory.getUserAll().then(setUserAll, null);
		}
		
		function refresh() {
			userConnectorFactory.getUserAll().then(setUserAll, function() {});
		};
		
		function deleteUser(id) {
			userConnectorFactory.deleteUser(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setUserAll(response) {
			ctrl.userAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoUser.all();
		};
	};
})();