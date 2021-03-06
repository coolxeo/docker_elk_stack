'use strict';

angular.module('angularfireApp')
  .factory('firebaseFactory', function () {
    return {
      getFireBaseRef: function (fireBaseUser, params) {
        return new Firebase(('//' + fireBaseUser + '.firebaseio.com' + (params ? params : ' ')).trim());
      }
    };
  }
);
