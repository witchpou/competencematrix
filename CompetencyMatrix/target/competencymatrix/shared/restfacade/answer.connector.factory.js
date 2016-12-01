answerConnectorFactory = ['$http', '$location', 'restConnectorFactory', function answerConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getAnswerAll: getAnswerAll,
    		loadAnswer: loadAnswer,
    		createAnswer: createAnswer,
    		updateAnswer: updateAnswer,
    		deleteAnswer : deleteAnswer
     };
    return factory;
	
	function getAnswerAll() {
		return $http.get('api/answer/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadAnswer(id) {
		return $http.get('api/answer/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createAnswer(answer) {
		return $http.put('api/answer/', answer)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateAnswer(answer) {
		return $http.post('api/answer/', answer)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteAnswer(id) {
		return $http.delete('api/answer/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];