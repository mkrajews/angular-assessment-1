angular.module('assessment')
.directive('logoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './views/logo.html'
    };
});
