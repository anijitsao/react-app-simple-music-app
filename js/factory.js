var app = angular.module('factoryModule', ['ngResource'])


app.factory('Api', ['$resource', function ($resource) {

	// base url
	var baseUrl = 'http://104.197.128.152:8000/v1'

	return {

		// Music Resource
		Music: $resource(baseUrl + '/tracks/:id', { id: '@_id' }, {
			query: { method: "GET", isArray: false },
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		}),

		// Genres resource
		Genre: $resource(baseUrl + '/genres/:id', { id: '@_id' }, {
			query: { method: "GET", isArray: false },
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		})
	}
}])


// app.factory('Genres', ['$resource', function ($resource) {
// 	return $resource('http://104.197.128.152:8000/v1/genres/:id', { id: '@_id' }, {
// 		query: { method: "GET", isArray: false },
// 		update: {
// 			method: 'PUT' // this method issues a PUT request
// 		}
// 	})
// }])