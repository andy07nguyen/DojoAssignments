myApp.controller('showController', ['$scope', 'usersFactory', '$routeParams', '$location', function ($scope, usersFactory, $routeParams, $location){
  $scope.users = [];
  $scope.showUser = [];
  // CALLBACK:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.users = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX: SHOW - FUNCTION
  usersFactory.index(setData);

// SHOW - FUNCTION
  // console.log("showController: ", $routeParams)
  function show(){
    usersFactory.show($routeParams.id, function(data){
      // console.log(data)
      $scope.showUser = data;
    })
  }
  show()
// VOTE - FUNCTION
  $scope.vote = function(obj, idx){
    // console.log("showController: ", obj, obj._user_id, idx)
    usersFactory.vote(obj._user_id, idx, function(data){
      // console.log("DATA FROM FACTORY: ", data)
      show()
    })
  }

}]);
