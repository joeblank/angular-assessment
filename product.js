angular.module('myApp')
.directive('productDir', function() {
  return {
    restrict: "AE",
    templateUrl: '/views/product-templ.html',
    scope: {

    },
    controller: function($scope, mainService, $stateParams) {
      $scope.call = function() {
        mainService.getOneProduct($stateParams.id).then(function(response) {
        $scope.singleItem = response;
      })
    }
    $scope.call();
    }


  }
})
