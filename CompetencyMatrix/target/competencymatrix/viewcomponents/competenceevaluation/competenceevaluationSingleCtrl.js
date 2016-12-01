/**
 * This controller maintains a 'competenceevaluation object and belongs to the view 'competenceevaluation.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competenceevaluation').controller('competenceevaluationSingleCtrl', competenceevaluationSingleCtrl);
	
	competenceevaluationSingleCtrl.$inject = ['$scope', '$routeParams', 'competenceevaluationConnectorFactory', 'gotoCompetenceEvaluation'];
	function competenceevaluationSingleCtrl($scope, $routeParams, competenceevaluationConnectorFactory, gotoCompetenceEvaluation) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoCompetenceEvaluation = gotoCompetenceEvaluation;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoCompetenceEvaluation.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? competenceevaluationConnectorFactory.updateCompetenceEvaluation : competenceevaluationConnectorFactory.createCompetenceEvaluation;
			saveFunction(ctrl.competenceevaluation).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.competenceevaluation != null && ctrl.competenceevaluation.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competenceevaluation = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.competenceevaluation.id) {
					ctrl.competenceevaluation.id = $routeParams.id;
					competenceevaluationConnectorFactory.loadCompetenceEvaluation(ctrl.competenceevaluation.id).then(setCompetenceEvaluation, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.competenceevaluation = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceEvaluation(response) {
			ctrl.competenceevaluation = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setCompetenceEvaluation(response);
				gotoCompetenceEvaluation.all();
			}
		}
	
	}
})();