/**
 * This controller facilitates the question.all.html - view to display all questions. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.question').controller('questionAllCtrl', questionAllCtrl);
	questionAllCtrl.$inject = ['questionConnectorFactory', 'gotoQuestion'];
	function questionAllCtrl(questionConnectorFactory, gotoQuestion) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteQuestion = deleteQuestion;
		ctrl.gotoQuestion = gotoQuestion;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.questionAll = [];
			ctrl.question = {};
			ctrl.idSelected = null;
			questionConnectorFactory.getQuestionAll().then(setQuestionAll, null);
		}
		
		function refresh() {
			questionConnectorFactory.getQuestionAll().then(setQuestionAll, function() {});
		};
		
		function deleteQuestion(id) {
			questionConnectorFactory.deleteQuestion(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setQuestionAll(response) {
			ctrl.questionAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoQuestion.all();
		};
	};
})();