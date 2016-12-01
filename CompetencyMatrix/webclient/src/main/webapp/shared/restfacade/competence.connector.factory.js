competenceConnectorFactory = ['$http', '$location', 'restConnectorFactory', function competenceConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getCompetenceAll: getCompetenceAll,
    		loadCompetence: loadCompetence,
    		createCompetence: createCompetence,
    		updateCompetence: updateCompetence,
    		deleteCompetence : deleteCompetence
     };
    return factory;
	
	function getCompetenceAll() {
		return $http.get('api/competence/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadCompetence(id) {
		return $http.get('api/competence/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createCompetence(competence) {
		return $http.put('api/competence/', competence)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateCompetence(competence) {
		return $http.post('api/competence/', competence)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteCompetence(id) {
		return $http.delete('api/competence/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];