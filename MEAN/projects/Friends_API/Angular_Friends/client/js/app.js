var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/view1.html',
        })
        .when('/partial2',{
            templateUrl: 'partials/view2.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
