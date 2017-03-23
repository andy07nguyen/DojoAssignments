myApp.factory('playerFactory', ['$http', function ($http){
  var factory = {};
  var playersList = [
    {
      name: "Jay",
      team: "Raiders"
    }
  ];
  // SHOW:
  factory.index = function(callback){
    callback(playersList)
  }
  // CREATE:
  factory.create = function(data, callback){
    playersList.push(data);
    callback(playersList);
  }
  //DELTE:
  factory.delete = function($index, callback){
    playersList.splice($index, 1);
    callback(playersList);
  }
  factory.addPlayerToTeam = function(playerIdx, team, callback){
    // console.log("playerFactory: ",playerIdx , team)
    playersList[playerIdx].team = team;
    callback(playersList);
  }
  factory.removePlayerFromTeam = function($index, callback){
      playersList[$index].team = "";
      callback(playersList)
  }
  return factory;
}]);
