/**
 * This controller maintains a 'answer object and belongs to the view 'answer.single.html.
 */
(function() {
	'use strict';
	angular.module('competencymatrixApp.answer').controller('answerSingleCtrl', answerSingleCtrl);
	
	answerSingleCtrl.$inject = ['$scope', '$routeParams', 'answerConnectorFactory', 'gotoAnswer'];
	function answerSingleCtrl($scope, $routeParams, answerConnectorFactory, gotoAnswer) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoAnswer = gotoAnswer;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoAnswer.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? answerConnectorFactory.updateAnswer : answerConnectorFactory.createAnswer;
			saveFunction(ctrl.answer).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.answer != null && ctrl.answer.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.answer = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.answer.id) {
					ctrl.answer.id = $routeParams.id;
					answerConnectorFactory.loadAnswer(ctrl.answer.id).then(setAnswer, function(){});
				}
				if ($routeParams.is == null) {
					ctrl.answer = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setAnswer(response) {
			ctrl.answer = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setAnswer(response);
				gotoAnswer.all();
			}
		}
	
	}
})();