angular.module('assessment').controller('shopCtrl', function($scope, shopService, $stateParams) {
    $scope.getProducts = function() {
      shopService.getProductInfo().then(function(response) {
        console.log('response');
          $scope.products = response;
      });
    };
    $scope.getProducts();
});
