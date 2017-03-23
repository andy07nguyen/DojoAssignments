myApp.controller('PlayersController', ['$scope', 'playerFactory', function ($scope, playerFactory){
  $scope.players = [];
  // CALLBACK - FUNCTION
  function setData(data){
    $scope.players = data;
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // SHOW - FUNCTION
  playerFactory.index(setData);
  // ADD - FUNCTION
  $scope.add = function(){
    playerFactory.create($scope.item, setData)
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // REMOVE - FUNCTION
  $scope.remove = function($index){
    playerFactory.delete($index, setData);
  }
}]);
