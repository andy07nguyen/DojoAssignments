// APP MODULE:
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);
// ROUTES:
  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/',{
          templateUrl: 'partials/login.html',
      })
      .when('/dashboard',{
          templateUrl: 'partials/main.html',
      })
      .when('/new',{
          templateUrl: 'partials/new.html',
      })
      .when('/poll/:id',{
          templateUrl: 'partials/show.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
