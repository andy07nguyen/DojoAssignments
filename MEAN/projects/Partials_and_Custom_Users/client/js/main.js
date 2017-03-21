// APP MODULE:
var app = angular.module('myApp', ['ngRoute']);
// ROUTE:
app.config(function ($routeProvider) {
  $routeProvider
    .when('/user',{
        templateUrl: 'partials/customizeUsers.html',
        controller: 'CustomizeUsersController'
    })
    .when('/list',{
        templateUrl: 'partials/userList.html',
        controller: 'UserListsController'
    })
    .otherwise({
      redirectTo: '/user'
    });
});
// FACTORY:
app.factory('usersFactory', ['$http', function ($http){
  var factory = {};
  var usersList = [
    {
      first: "Andy",
      last: "Nguyen",
      language: "Python"
    }
  ];
  // SHOW:
  factory.index = function(callback){
    callback(usersList)
  }
  // CREATE:
  factory.create = function(item, callback) {
    // console.log("usersFactory: Data From controller ", item)
    usersList.push(item);
    callback(usersList)
  }
  //DELETE:
  factory.delete = function(data, callback) {
    // console.log("usersFactory: Data From controller ", data, data.$$hashKey)
    usersList.splice(data, 1);
    callback(usersList);
  }
  return factory;
}]);
// CONTROLLER: CUSTOMIZE USERS
app.controller('CustomizeUsersController', ['$scope', 'usersFactory', function($scope, usersFactory){
  $scope.users = [];
  // CALLBACK - FUNCTION:
  function setData(data){
    // console.log("CallBack: Data From factory ", data)
    $scope.users = data;
    $scope.item = {};
  }
  // SHOW - FUNCTION:
  usersFactory.index(setData);
  // ADD - FUNCTION:
  $scope.add = function(){
    usersFactory.create($scope.item, setData);
    // console.log("UsersController: Data From html ", $scope.item)
  }
  // REMOVE - FUNCTION:
  $scope.remove = function(data){
    // console.log("UsersController: Data From html ", data)
    usersFactory.delete(data, setData);
  }

}]);
// CONTROLLER: USER LIST
app.controller('UserListsController', ['$scope', 'usersFactory', function ($scope, usersFactory){
  $scope.users = [];
  // CALLBACK - FUNCTION:
  function setData(data){
    // console.log("CallBack: Data From factory ", data)
    $scope.users = data;
  }
  // SHOW - FUNCTION:
  usersFactory.index(setData);
}]);
