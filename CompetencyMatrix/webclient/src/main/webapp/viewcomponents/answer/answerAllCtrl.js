/**
 * This controller facilitates the answer.all.html - view to display all answers. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.answer').controller('answerAllCtrl', answerAllCtrl);
	answerAllCtrl.$inject = ['answerConnectorFactory', 'gotoAnswer'];
	function answerAllCtrl(answerConnectorFactory, gotoAnswer) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteAnswer = deleteAnswer;
		ctrl.gotoAnswer = gotoAnswer;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.answerAll = [];
			ctrl.answer = {};
			ctrl.idSelected = null;
			answerConnectorFactory.getAnswerAll().then(setAnswerAll, null);
		}
		
		function refresh() {
			answerConnectorFactory.getAnswerAll().then(setAnswerAll, function() {});
		};
		
		function deleteAnswer(id) {
			answerConnectorFactory.deleteAnswer(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setAnswerAll(response) {
			ctrl.answerAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoAnswer.all();
		};
	};
})();