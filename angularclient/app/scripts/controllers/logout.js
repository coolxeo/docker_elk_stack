'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LogoutCtrl', ['$window', '$scope', 'fbService',
    function ($scope, $window, fbService) {
      console.log('logout controller');
      console.log($window.authData);
      if (typeof $window.authData !== 'undefined') {
        fbService.logout($scope, '/');
      }
    }]
);

