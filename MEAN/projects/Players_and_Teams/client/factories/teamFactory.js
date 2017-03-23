myApp.factory('teamFactory', ['$http', function ($http){
  var factory = {};
  var teamsList = [
    {
      name: "49ers"
    }
  ];
  // SHOW:
  factory.index = function(callback){
    callback(teamsList)
  }
  // CREATE:
  factory.create = function(data, callback){
    teamsList.push(data);
    callback(teamsList);
  }
  //DELTE:
  factory.delete = function($index, callback){
    teamsList.splice($index, 1);
    callback(teamsList);
  }
  return factory;
}]);
