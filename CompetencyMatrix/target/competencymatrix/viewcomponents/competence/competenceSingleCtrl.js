/**
 * This controller maintains a 'competence object and belongs to the view 'competence.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competence').controller('competenceSingleCtrl', competenceSingleCtrl);
	
	competenceSingleCtrl.$inject = ['$scope', '$routeParams', 'competenceConnectorFactory', 'gotoCompetence'];
	function competenceSingleCtrl($scope, $routeParams, competenceConnectorFactory, gotoCompetence) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoCompetence = gotoCompetence;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoCompetence.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? competenceConnectorFactory.updateCompetence : competenceConnectorFactory.createCompetence;
			saveFunction(ctrl.competence).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.competence != null && ctrl.competence.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competence = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.competence.id) {
					ctrl.competence.id = $routeParams.id;
					competenceConnectorFactory.loadCompetence(ctrl.competence.id).then(setCompetence, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.competence = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetence(response) {
			ctrl.competence = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setCompetence(response);
				gotoCompetence.all();
			}
		}
	
	}
})();