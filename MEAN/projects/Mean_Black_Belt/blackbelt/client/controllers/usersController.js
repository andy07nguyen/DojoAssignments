myApp.controller('usersController', ['$scope', 'usersFactory', 'loginFactory', '$routeParams', '$location', function ($scope, usersFactory, loginFactory, $routeParams, $location){
  // console.log("ROUTE PARAMS: ", $routeParams);
  $scope.loggedInUser = loginFactory.loggedInUser;
  $scope.users = [];
  $scope.showUser;
// CALLBACK:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.users = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX: SHOW - FUNCTION
  usersFactory.index(setData);
// ADD - FUNCTION
  $scope.add = function(){
    // console.log("LOGGEDINUSER: ", $scope.loggedInUser)
    // console.log("usersController: ", $scope.item)
    $scope.item.name = $scope.loggedInUser.name
    // console.log($scope.item)
    usersFactory.create($scope.item, function(data){
      // console.log("usersController: ", data)
      $scope.users = data;
      // console.log($scope.users)
    });
    $scope.item = {};
    $location.url('/dashboard');
  }
// REMOVE - FUNCTION
  $scope.remove = function(data){
    // console.log("usersController: ", data._id)
    usersFactory.delete(data._id, setData);
    usersFactory.index(setData);
  }



}]);
