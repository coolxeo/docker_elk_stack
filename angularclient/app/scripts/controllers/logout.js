'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LogoutCtrl', ['$window', '$scope', 'firebaseServiceFactory',
    function ($scope, $window, firebaseServiceFactory) {
      $scope.logout = function(){
        //console.log('logout controller');
        if (typeof $window.authData !== 'undefined') {
          firebaseServiceFactory.logout($scope, '/');
        }
      };
    }]
);

