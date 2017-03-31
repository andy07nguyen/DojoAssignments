myApp.factory('usersFactory', ['$http', function ($http){
  var usersList = [];
  var showUser = [];
  var errorMsg = [];
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
    $http.post('/friends/new', data).then(function(errData){
      console.log("DATA FROM SERVER CONTROLLER: )", errData);
      // errorMsg.push(errData.data)
      callback(errData.data)
      // callback(errorMsg)

    },function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data, returned_data.data.errors.question.message);
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
  // SHOW:
  factory.show = function(id, callback){
    // console.log("DATA FROM CONTROLLER: ", id)
    $http.get('/friends/'+id).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      callback(returned_data.data)
    })
  }
  // VOTE:
  factory.vote = function(id, idx, callback){
    // console.log("DATA FROM CONTROLLER: ", id, idx)
    var index = {index: idx}
    $http.put('/friends/vote/'+id, index).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      showUser.push(returned_data.data)
      callback(showUser)
    })
  }

  return factory
}]);
