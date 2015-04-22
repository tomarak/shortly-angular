angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
    Links.addLink($scope.link).then(function(){
      console.log('link added');
    })
    .catch(function(err){
      console.log(err);
    });
  }

});
