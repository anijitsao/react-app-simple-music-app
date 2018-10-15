var app = angular.module('controllerModule', ['factoryModule'])

app.controller('appCtrl', ['$scope', '$rootScope', 'Api', function ($scope, $rootScope, Api) {

	$scope.showAdd = false

	// listing music
	$scope.listMusic = function () {
		$scope.category = 'Tracks'
		$scope.showMusic = true
		$scope.showGenre = false
		Api.Music.query(function (data) {
			// console.log(data.results)
			$scope.musicTracks = data.results

			// set the stars/ratings
			for (var i = 0; i < $scope.musicTracks.length; i++) {

				var rating = parseInt($scope.musicTracks[i]['rating'])
				var stars = []
				for (var j = 0; j < rating; j++) {
					stars.push(j)
				}
				// console.log(stars)
				$scope.musicTracks[i]['stars'] = stars.slice()
			}
			console.log('from Music Traks', $scope.musicTracks)
		})
	}

	// initialze music listing for the first time
	$scope.listMusic()

	// listing genres
	$scope.listGenre = function () {
		$scope.category = 'Genres'
		$scope.showMusic = false
		$scope.showGenre = true
		Api.Genres.query(function (data) {
			// console.log(data.results)
			$scope.genresList = data.results
			console.log('from genres', $scope.genresList)
		})
	}


	// add Music/ genres
	$scope.showAddSection = function () {
		$scope.showAdd = true
		console.log('value of show music: ', $scope.showMusic)
	}

	$scope.save = function () {

		console.log('name: ', $scope.name, 'rating: ', $scope.rating, 'genre: ', $scope.genre)

		var genres = []
		genres.push($scope.genre)

		if ($scope.showMusic) {
			$scope.music = new Api.Music()
			$scope.music = { "rating": $scope.rating, "title": $scope.name, "genres": [] }
			// console.log($scope.music.results)

			Api.Music.save($scope.music, function (data) {
				console.log(data)
				$scope.showAdd = false
				$scope.listMusic()
			})
		} else {
			$scope.music = new Api.Genres()
			$scope.music = { "name": $scope.name }
			// console.log($scope.music.results)

			Api.Genres.save($scope.music, function (data) {
				console.log(data)
				$scope.showAdd = false
				$scope.listGenre()
			})
		}
	}

	// editing music/ genres
	$scope.editMusic = function (music) {
		console.log(music)
		$scope.showEdit = true
		$rootScope.id = music.id
	}

	$scope.editGenre = function (music) {
		console.log(music)
		$scope.showEdit = true
		$rootScope.id = music.id
	}
}])

// controller to handle upadate tasks 
app.controller('updateCtrl', ['$scope', '$rootScope', 'Api', function ($scope, $rootScope, Api) {

	// update track
	$scope.updateTrack = function () {
		$scope.showEdit = false
		console.log('rename: ', $scope.name, 'rating:', $scope.rating, 'genres:', $scope.genre)
		console.log('Id of the track: ', $rootScope.id)

		$scope.entry = Api.Music.get({ id: $rootScope.id }, function () {
			// $scope.entry is fetched from server and is an instance of Entry
			$scope.entry.data = { "rating": $scope.rating, "title": $scope.name, "genres": [] }
			$scope.entry.$update(function (data) {
				//updated in the backend
				console.log(data)
			})
		})

	}

	// update genre
	$scope.updateGenre = function () {
		$scope.showEdit = false
		console.log('rename: ', $scope.name, 'rating:', $scope.rating, 'genres:', $scope.genre)
		console.log('Id of the track: ', $rootScope.id)

		$scope.entry = Api.Genres.get({ id: $rootScope.id }, function () {
			// $scope.entry is fetched from server and is an instance of Entry
			$scope.entry.data = { "name": $scope.name }
			$scope.entry.$update(function (data) {
				//updated in the backend
				console.log(data)
			})
		})
	}
}])

