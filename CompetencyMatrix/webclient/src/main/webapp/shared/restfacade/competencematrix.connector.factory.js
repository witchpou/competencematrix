competencematrixConnectorFactory = ['$http', '$location', 'restConnectorFactory', function competencematrixConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getCompetenceMatrixAll: getCompetenceMatrixAll,
    		loadCompetenceMatrix: loadCompetenceMatrix,
    		createCompetenceMatrix: createCompetenceMatrix,
    		updateCompetenceMatrix: updateCompetenceMatrix,
    		deleteCompetenceMatrix : deleteCompetenceMatrix
     };
    return factory;
	
	function getCompetenceMatrixAll() {
		return $http.get('api/competencematrix/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadCompetenceMatrix(id) {
		return $http.get('api/competencematrix/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createCompetenceMatrix(competencematrix) {
		return $http.put('api/competencematrix/', competencematrix)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateCompetenceMatrix(competencematrix) {
		return $http.post('api/competencematrix/', competencematrix)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteCompetenceMatrix(id) {
		return $http.delete('api/competencematrix/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];