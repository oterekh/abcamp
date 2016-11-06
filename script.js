// create the module and name it tolApp
	var tolApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	tolApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

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

			// route for the help page
			.when('/help', {
				templateUrl : 'pages/help.html',
				controller  : 'helpController'
			});
	});

	// create the controller and inject Angular's $scope
	tolApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	tolApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	tolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
		tolApp.controller('helpController', function($scope) {
		$scope.message = 'Help will be there.';
	});
	
	
	angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});