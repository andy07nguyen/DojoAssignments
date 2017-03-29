myApp.factory('usersFactory', ['$http', function ($http){
  var usersList = [
    {
      first: "Andy",
      last: "Nguyen",
      date: "yay"
    }
  ];
  var showList = [];
  var factory = {};
  // INDEX: SHOW
  factory.index = function(callback){
    $http.get('/friends').then(function(returned_data){
    // console.log(returned_data.data)
    callback(returned_data.data);
    })
  };
  // CREATE:
  factory.create = function(data, callback){
    // console.log("usersFactory: ", data)
    $http.post('/friends/new', data).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      usersList.push(returned_data.data)
      // callback(returned_data.data)
      callback(usersList)
    })
  };
  // DELETE:
  factory.delete = function(id, callback){
    // console.log("usersFactory: ", id)
    $http.delete('/friends/'+id).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      callback(returned_data.data)
    })
  };
  //SHOW:
  factory.show = function(id, callback){
    // console.log("usersFactory: ", id)
    $http.get('/friends/'+id).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      // showList.push(returned_data.data);
      callback(returned_data.data);
      // }
    })
  };


  return factory
}]);
