var myAppModule = angular.module('myApp', []);
myAppModule.controller('myController', function ($scope){
  $scope.foods = [
    {name: "pizza"},
    {name: "apple"},
    {name: "bacon"},
    {name: "ice cream"},
    {name: "burger"}
  ];

  $scope.addFood = function(){
    $scope.foods.push($scope.newFood);
    $scope.newFood = {};
  };

  $scope.txt = "Try clicking the submit button";

  $scope.addJunk = function(){
    $scope.txt = "You clicked the button! :)";
  };

});
