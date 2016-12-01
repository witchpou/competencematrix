/**
 * This controller facilitates the competenceprofile.all.html - view to display all competenceprofiles. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.competenceprofile').controller('competenceprofileAllCtrl', competenceprofileAllCtrl);
	competenceprofileAllCtrl.$inject = ['competenceprofileConnectorFactory', 'gotoCompetenceProfile'];
	function competenceprofileAllCtrl(competenceprofileConnectorFactory, gotoCompetenceProfile) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteCompetenceProfile = deleteCompetenceProfile;
		ctrl.gotoCompetenceProfile = gotoCompetenceProfile;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.competenceprofileAll = [];
			ctrl.competenceprofile = {};
			ctrl.idSelected = null;
			competenceprofileConnectorFactory.getCompetenceProfileAll().then(setCompetenceProfileAll, null);
		}
		
		function refresh() {
			competenceprofileConnectorFactory.getCompetenceProfileAll().then(setCompetenceProfileAll, function() {});
		};
		
		function deleteCompetenceProfile(id) {
			competenceprofileConnectorFactory.deleteCompetenceProfile(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setCompetenceProfileAll(response) {
			ctrl.competenceprofileAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoCompetenceProfile.all();
		};
	};
})();