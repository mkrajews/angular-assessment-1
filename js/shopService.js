angular.module('assessment').service('shopService', function($http) {
    this.getProductInfo = function() {
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      }).then(function(response) {
          console.log('response ', response);
          return response.data;
      });
    };
});
