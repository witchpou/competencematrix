questionConnectorFactory = ['$http', '$location', 'restConnectorFactory', function questionConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getQuestionAll: getQuestionAll,
    		loadQuestion: loadQuestion,
    		createQuestion: createQuestion,
    		updateQuestion: updateQuestion,
    		deleteQuestion : deleteQuestion
     };
    return factory;
	
	function getQuestionAll() {
		return $http.get('api/question/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadQuestion(id) {
		return $http.get('api/question/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createQuestion(question) {
		return $http.put('api/question/', question)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateQuestion(question) {
		return $http.post('api/question/', question)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteQuestion(id) {
		return $http.delete('api/question/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];