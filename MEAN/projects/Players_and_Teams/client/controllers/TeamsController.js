myApp.controller('TeamsController', ['$scope', 'teamFactory', function ($scope, teamFactory){
  $scope.teams = [];
  // CALLBACK - FUNCTION
  function setData(data){
    $scope.teams = data;
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // SHOW - FUNCTION
  teamFactory.index(setData);
  // ADD - FUNCTION
  $scope.add = function(){
    teamFactory.create($scope.item, setData)
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // REMOVE - FUNCTION
  $scope.remove = function($index){
    teamFactory.delete($index, setData);
  }
}]);
