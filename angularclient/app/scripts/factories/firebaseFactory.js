'use strict';

angular.module('angularfireApp')
  .factory('firebaseFactory', function () {
    return {
      getFireBaseRef: function (fireBaseUser) {
        return new Firebase('//' + fireBaseUser + '.firebaseio.com');
      }
    };
  }
);
