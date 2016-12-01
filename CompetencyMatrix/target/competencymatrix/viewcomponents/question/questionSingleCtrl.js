/**
 * This controller maintains a 'question object and belongs to the view 'question.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.question').controller('questionSingleCtrl', questionSingleCtrl);
	
	questionSingleCtrl.$inject = ['$scope', '$routeParams', 'questionConnectorFactory', 'gotoQuestion'];
	function questionSingleCtrl($scope, $routeParams, questionConnectorFactory, gotoQuestion) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoQuestion = gotoQuestion;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoQuestion.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? questionConnectorFactory.updateQuestion : questionConnectorFactory.createQuestion;
			saveFunction(ctrl.question).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.question != null && ctrl.question.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.question = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.question.id) {
					ctrl.question.id = $routeParams.id;
					questionConnectorFactory.loadQuestion(ctrl.question.id).then(setQuestion, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.question = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setQuestion(response) {
			ctrl.question = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setQuestion(response);
				gotoQuestion.all();
			}
		}
	
	}
})();