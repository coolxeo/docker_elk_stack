'use strict';
angular.module('angularfireApp')
  .service('redirectService', ['$location', function ($location) {
    this.redirectTo = function (redirectTo) {
        //console.log('redirecting to ' + redirectTo);
        $location.path(redirectTo);
    };
  }]);
