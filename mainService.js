angular.module('myApp')
.service('mainService', function($q, $http) {

this.shopApi = function() {
  return $http({
    url: 'http://practiceapi.devmounta.in/products',
    method: 'GET'
  })
}

this.getOneProduct = function(id) {

  return $http({
    method: "GET",
    url: 'http://practiceapi.devmounta.in/products/' + id
  })




}








})
