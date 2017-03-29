// APP MODULE:
var myApp = angular.module('myApp', ['ngRoute']);
// ROUTES:
  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/',{
          templateUrl: 'partials/main.html',
      })
      .when('/new',{
          templateUrl: 'partials/new.html',
      })
      .when('/:show',{
          templateUrl: 'partials/show.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
