myApp.factory('usersFactory', ['$http', '$location', function ($http, $location){
  var usersList = [];
  var showUser = [];
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
      console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      // console.log("Errors - DATA FROM SERVER CONTROLLER: )", returned_data.data.errors.question.message, returned_data.data.errors["options.0.value"].message);
      var question_name = returned_data.data.errors.question.name;
      var option1_name = returned_data.data.errors["options.0.value"].name;
      var option2_name = returned_data.data.errors["options.1.value"].name;
      var option3_name = returned_data.data.errors["options.2.value"].name;
      var option4_name = returned_data.data.errors["options.3.value"].name;
      // ERROR CHECK: RETURN DATA
      if( question_name && option1_name && option2_name && option3_name && option4_name == "ValidatorError"){
        callback(returned_data.data)
      } else {
        usersList.push(returned_data.data)
        // callback(returned_data.data)
        callback(usersList)
      }
      // usersList.push(returned_data.data)
      // // callback(returned_data.data)
      // callback(usersList)
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
