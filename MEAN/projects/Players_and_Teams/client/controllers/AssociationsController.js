myApp.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function ($scope, playerFactory, teamFactory){
  $scope.players = [];
  $scope.teams = [];
  // CALLBACK: PLAYERS - FUNCTION
  function setPlayers(data){
    $scope.players = data;
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // CALLBACK: TEAMS - FUNCTION
  function setTeams(data){
    $scope.teams = data;
    $scope.item = {}; // CLEAR INPUT FIELD:
  }
  // SHOW - FUNCTION
  playerFactory.index(setPlayers);
  // SHOW - FUNCTION
  teamFactory.index(setTeams);
  // ADD PLAYER TO TEAM
  $scope.addPlayerToTeam = function(){
    // console.log("AssociationsController: ", $scope.playerInfo)
    playerFactory.addPlayerToTeam($scope.playerInfo, $scope.teamInfo, setPlayers)
  }
  // REMOVE PLAYER'S TEAM
  $scope.removePlayerFromTeam = function($index){
    playerFactory.removePlayerFromTeam($index, setPlayers)
  }
}]);
