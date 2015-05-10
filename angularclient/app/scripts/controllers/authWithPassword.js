'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
app
  .controller('AuthWithPasswordCtrl', ['$scope', '$rootScope', 'fbService',
    function ($scope, $rootScope, fbService) {
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          fbService.authWithPassword($scope, $rootScope, '/');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
    }]);

