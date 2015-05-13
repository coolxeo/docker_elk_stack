'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularfireApp
 */
app
  .controller('LogoutCtrl', ['$window', '$scope', 'firebaseServiceFactory',
    function ($scope, $window, firebaseServiceFactory) {
      console.log('logout controller');
      if (typeof $window.authData !== 'undefined') {
        firebaseServiceFactory.logout($scope, '/');
      }
    }]
);

