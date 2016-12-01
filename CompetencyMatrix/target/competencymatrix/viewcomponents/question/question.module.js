/**
 *  Defines all dependencies (services / factories and used modules) for the mo
 * (function() { - syntax: Immediately Invoked Function Expression to avoid global variables: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y010
 */
(function() {
	'use strict';
	
	angular.module('competencymatrixApp.question', ['ngRoute','pascalprecht.translate']);
	angular.module('competencymatrixApp.question').factory('questionConnectorFactory', questionConnectorFactory);
})();
