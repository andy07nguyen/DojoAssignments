var myAppModule = angular.module('App', []);
myAppModule.controller('divController', function ($scope){
  $scope.myName = "Andy";
  $scope.myFavoriteLanguage = "Python";
  $scope.myFavoriteJSLibrary = "Angular";
});
