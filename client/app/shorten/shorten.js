angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.recentlyAdded = [];

  $scope.addLink = function(){
    console.log($scope.recentlyAdded);
    $scope.recentlyAdded.push($scope.link);
    Links.addLink($scope.link).then(function(){

    })
    .catch(function(err){
      console.log(err);
    });
  }

});
