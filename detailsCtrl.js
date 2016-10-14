angular.module('myApp')
.controller('detailsCtrl', function($scope, mainService, $stateParams) {

mainService.getOneProduct($stateParams.id).then(function(response) {
  $scope.singleItem = response.data;
  console.log(response);
})







})
