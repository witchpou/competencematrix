competenceevaluationConnectorFactory = ['$http', '$location', 'restConnectorFactory', function competenceevaluationConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getCompetenceEvaluationAll: getCompetenceEvaluationAll,
    		loadCompetenceEvaluation: loadCompetenceEvaluation,
    		createCompetenceEvaluation: createCompetenceEvaluation,
    		updateCompetenceEvaluation: updateCompetenceEvaluation,
    		deleteCompetenceEvaluation : deleteCompetenceEvaluation
     };
    return factory;
	
	function getCompetenceEvaluationAll() {
		return $http.get('api/competenceevaluation/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadCompetenceEvaluation(id) {
		return $http.get('api/competenceevaluation/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createCompetenceEvaluation(competenceevaluation) {
		return $http.put('api/competenceevaluation/', competenceevaluation)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateCompetenceEvaluation(competenceevaluation) {
		return $http.post('api/competenceevaluation/', competenceevaluation)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteCompetenceEvaluation(id) {
		return $http.delete('api/competenceevaluation/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];