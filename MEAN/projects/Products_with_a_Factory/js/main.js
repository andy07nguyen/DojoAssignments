// APP MODULE:
var myAppModule = angular.module('myApp', []);
// CONTROLLER:
myAppModule.controller('myController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.item = {};
  $scope.products = {};
  // CALLBACK - FUNCTION: ***Very Important***
  function setProducts(data){
    $scope.products = data;
    $scope.item = {};
  }
  // ADD - FUCNTION:
  $scope.add = function(){
    productFactory.create($scope.item, setProducts);
  }
  // DELETE - FUNCTION:
  $scope.remove = function(id){
    productFactory.delete(id, setProducts);
  }

}]);
// FACTORY:
myAppModule.factory('productFactory', ['$http', function($http){
  var factory = {};
  var products = [];
  // CREATE:
  factory.create = function(item, callback) {
    // if(item.price && Number(parseFloat(item.price)) == item.price){
      products.push(item);
      callback(products);
    }
  }
  // DELETE:
  factory.delete = function(id, callback) {
    products.splice(id, 1);
    callback(products);
  }
  return factory;
}]);
