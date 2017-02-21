angular.module('assessment')
.directive('productDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './views/product-tmpl.html',
    scope: {
      product: '='
    }
  };
});
