var myAppModule = angular.module('myApp', []);
myAppModule.controller('myController', function ($scope){
// USERS ARRAY:
  $scope.users = [
    {
      firstname: "Andy",
      lastname: "Nguyen",
      language: "Python"
    },
    {
      firstname: "Tim",
      lastname: "Cook",
      language: "Swift"
    },
    {
      firstname: "Steve",
      lastname: "Job",
      language: "JS"
    }
  ];
// ADD NEW USERS:
  $scope.addUser = function(){
    $scope.users.push($scope.newUser)
    $scope.newUser = {};
  };
// REMOVE USERS:
  $scope.removeUser = function(removeuser){
    var index = $scope.users.indexOf(removeuser);
    $scope.users.splice(index,1);
  };

});
