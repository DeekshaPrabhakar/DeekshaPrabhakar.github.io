// create the module and name it deeApp
	var deeApp = angular.module('deeApp', ['ngRoute']);

	// configure our routes
	deeApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
			
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the resume page
			.when('/resume', {
				templateUrl : 'pages/resume.html',
				controller  : 'resumeController'
			});

			// use the HTML5 History API
        $locationProvider.html5Mode(true);
	});

	// create the controller and inject Angular's $scope
	deeApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	deeApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	deeApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	deeApp.controller('resumeController', function($scope) {
		$scope.message = 'resume us! JK. This is just a demo.';
	});