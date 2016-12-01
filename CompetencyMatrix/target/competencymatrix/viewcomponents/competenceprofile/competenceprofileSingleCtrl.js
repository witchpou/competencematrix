/**
 * This controller maintains a 'competenceprofile object and belongs to the view 'competenceprofile.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competenceprofile').controller('competenceprofileSingleCtrl', competenceprofileSingleCtrl);
	
	competenceprofileSingleCtrl.$inject = ['$scope', '$routeParams', 'competenceprofileConnectorFactory', 'gotoCompetenceProfile'];
	function competenceprofileSingleCtrl($scope, $routeParams, competenceprofileConnectorFactory, gotoCompetenceProfile) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoCompetenceProfile = gotoCompetenceProfile;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoCompetenceProfile.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? competenceprofileConnectorFactory.updateCompetenceProfile : competenceprofileConnectorFactory.createCompetenceProfile;
			saveFunction(ctrl.competenceprofile).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.competenceprofile != null && ctrl.competenceprofile.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competenceprofile = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.competenceprofile.id) {
					ctrl.competenceprofile.id = $routeParams.id;
					competenceprofileConnectorFactory.loadCompetenceProfile(ctrl.competenceprofile.id).then(setCompetenceProfile, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.competenceprofile = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceProfile(response) {
			ctrl.competenceprofile = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setCompetenceProfile(response);
				gotoCompetenceProfile.all();
			}
		}
	
	}
})();