angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: './views/blog.html'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: './views/shop.html',
      controller: 'mainController'
    })
    .state('product', {
      url: '/product/:id',
      templateUrl: './views/product-tmpl.html',
      controller: 'detailsCtrl'
    })








})
