// APP MODULE:
var myAppModule = angular.module('myApp', []);

// PRODUCT - CONTROLLER:
myAppModule.controller('myController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.item = {};
  $scope.products = [];


  // CALLBACK - FUNCTION: ***Very Important***
  function setProducts(data){
    $scope.products = data;
    $scope.item = {};
  }
  // SHOW DATA ON PAGE - FUNCTION:
  productFactory.index(setProducts);
  // ADD - FUCNTION:
  $scope.add = function(){
    productFactory.create($scope.item, setProducts);
  }
  // DELETE - FUNCTION:
  $scope.remove = function(id){
    productFactory.delete(id, setProducts);
  }
}]);

// ORDER - CONTROLLER:
myAppModule.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.products = [];
  // CALLBACK - FUNCTION: ***Very Important***
  function setProducts(data){
    // console.log("received data", data)
    $scope.products = data;
    $scope.item = {};
  }
  // SHOW DATA ON PAGE - FUNCTION:
  productFactory.index(setProducts);
  // BUY - FUNCTION:
  $scope.buy = function(data){
    productFactory.update(data, 1, setProducts);
  }
}]);

// FACTORY:
myAppModule.factory('productFactory', ['$http', function($http){
  var factory = {};
  var products = [
    {
      name: "hat",
      quantity: 50,
      price: 14.99
    }
  ];
  // SHOW:
  factory.index = function(callback){
    callback(products);
  };
  // CREATE:
  factory.create = function(item, callback) {
      item.quantity = 50;
      products.push(item);
      callback(products);
  };
  // UPDATE:
  factory.update = function(data, quantity, callback) {
    // console.log("this is factory update", data.name, data.quantity);
    // var index = products.indexOf(data.data);
    // for thing in products
    //   product[thing]
    if(Number.isInteger(data.quantity)){
      for(var i = 0; i < products.length; i++){
        // console.log("this is ", products[i].name)
        if(products[i].name == data.name) {
          // console.log("hello world");
          if(products[i].quantity - quantity > 0) {
            products[i].quantity = products[i].quantity - quantity;
          } else {
            products[i].quantity = 0;
          }
        }
      }
    }
    callback(products);
  };
  // DELETE:
  factory.delete = function(id, callback) {
    products.splice(id, 1);
    callback(products);
  }
  return factory;
}]);
