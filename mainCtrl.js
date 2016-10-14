angular.module('myApp')
.controller('mainController', function($scope, mainService, $stateParams) {

$scope.shopApi = function() {
  mainService.shopApi().then(function(response) {
    $scope.shopData = response.data;
  })
}

$scope.shopApi();


mainService.getOneProduct($stateParams.id).then(function(response) {
  $scope.singleItem = response;
  console.log(response);
})
//
$scope.hideImageText = true;







})
