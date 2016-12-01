/**
 * This controller facilitates the competenceevaluation.all.html - view to display all competenceevaluations. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competenceevaluation').controller('competenceevaluationAllCtrl', competenceevaluationAllCtrl);
	competenceevaluationAllCtrl.$inject = ['competenceevaluationConnectorFactory', 'gotoCompetenceEvaluation'];
	function competenceevaluationAllCtrl(competenceevaluationConnectorFactory, gotoCompetenceEvaluation) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteCompetenceEvaluation = deleteCompetenceEvaluation;
		ctrl.gotoCompetenceEvaluation = gotoCompetenceEvaluation;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competenceevaluationAll = [];
			ctrl.competenceevaluation = {};
			ctrl.idSelected = null;
			competenceevaluationConnectorFactory.getCompetenceEvaluationAll().then(setCompetenceEvaluationAll, null);
		}
		
		function refresh() {
			competenceevaluationConnectorFactory.getCompetenceEvaluationAll().then(setCompetenceEvaluationAll, function() {});
		};
		
		function deleteCompetenceEvaluation(id) {
			competenceevaluationConnectorFactory.deleteCompetenceEvaluation(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceEvaluationAll(response) {
			ctrl.competenceevaluationAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoCompetenceEvaluation.all();
		};
	};
})();