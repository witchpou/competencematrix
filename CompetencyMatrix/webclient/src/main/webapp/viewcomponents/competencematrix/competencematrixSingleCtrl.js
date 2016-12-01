/**
 * This controller maintains a 'competencematrix object and belongs to the view 'competencematrix.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competencematrix').controller('competencematrixSingleCtrl', competencematrixSingleCtrl);
	
	competencematrixSingleCtrl.$inject = ['$scope', '$routeParams', 'competencematrixConnectorFactory', 'gotoCompetenceMatrix'];
	function competencematrixSingleCtrl($scope, $routeParams, competencematrixConnectorFactory, gotoCompetenceMatrix) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoCompetenceMatrix = gotoCompetenceMatrix;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoCompetenceMatrix.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? competencematrixConnectorFactory.updateCompetenceMatrix : competencematrixConnectorFactory.createCompetenceMatrix;
			saveFunction(ctrl.competencematrix).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.competencematrix != null && ctrl.competencematrix.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competencematrix = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.competencematrix.id) {
					ctrl.competencematrix.id = $routeParams.id;
					competencematrixConnectorFactory.loadCompetenceMatrix(ctrl.competencematrix.id).then(setCompetenceMatrix, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.competencematrix = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceMatrix(response) {
			ctrl.competencematrix = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setCompetenceMatrix(response);
				gotoCompetenceMatrix.all();
			}
		}
	
	}
})();