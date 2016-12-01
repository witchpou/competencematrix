/**
 * This controller facilitates the competence.all.html - view to display all competences. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competence').controller('competenceAllCtrl', competenceAllCtrl);
	competenceAllCtrl.$inject = ['competenceConnectorFactory', 'gotoCompetence'];
	function competenceAllCtrl(competenceConnectorFactory, gotoCompetence) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteCompetence = deleteCompetence;
		ctrl.gotoCompetence = gotoCompetence;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competenceAll = [];
			ctrl.competence = {};
			ctrl.idSelected = null;
			competenceConnectorFactory.getCompetenceAll().then(setCompetenceAll, null);
		}
		
		function refresh() {
			competenceConnectorFactory.getCompetenceAll().then(setCompetenceAll, function() {});
		};
		
		function deleteCompetence(id) {
			competenceConnectorFactory.deleteCompetence(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceAll(response) {
			ctrl.competenceAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoCompetence.all();
		};
	};
})();