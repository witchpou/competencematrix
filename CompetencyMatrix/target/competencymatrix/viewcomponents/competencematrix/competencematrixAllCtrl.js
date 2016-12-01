/**
 * This controller facilitates the competencematrix.all.html - view to display all competencematrixs. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competencematrix').controller('competencematrixAllCtrl', competencematrixAllCtrl);
	competencematrixAllCtrl.$inject = ['competencematrixConnectorFactory', 'gotoCompetenceMatrix'];
	function competencematrixAllCtrl(competencematrixConnectorFactory, gotoCompetenceMatrix) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteCompetenceMatrix = deleteCompetenceMatrix;
		ctrl.gotoCompetenceMatrix = gotoCompetenceMatrix;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competencematrixAll = [];
			ctrl.competencematrix = {};
			ctrl.idSelected = null;
			competencematrixConnectorFactory.getCompetenceMatrixAll().then(setCompetenceMatrixAll, null);
		}
		
		function refresh() {
			competencematrixConnectorFactory.getCompetenceMatrixAll().then(setCompetenceMatrixAll, function() {});
		};
		
		function deleteCompetenceMatrix(id) {
			competencematrixConnectorFactory.deleteCompetenceMatrix(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceMatrixAll(response) {
			ctrl.competencematrixAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoCompetenceMatrix.all();
		};
	};
})();