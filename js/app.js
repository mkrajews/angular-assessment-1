angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'shopCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html',
            controller: 'shopCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: './views/blog.html',
            controller: 'shopCtrl'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: './views/shop.html',
            controller: 'shopCtrl'
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: './views/product-details.html',
            controller: function($stateParams,$scope,$http) {
              var id = $stateParams.id;
              $scope.getProduct = function() {
                $http({
                  method: 'GET',
                  url: 'http://practiceapi.devmounta.in/products/' + id
                }).then(function(response) {
                  console.log(response.data);
                    $scope.product = response.data;
                });
              };
              $scope.getProduct();
            }
        });
});
