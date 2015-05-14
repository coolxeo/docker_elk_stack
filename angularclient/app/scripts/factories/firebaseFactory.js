'use strict';

app
  .factory('firebaseFactory', function () {
    return {
      getFireBaseRef: function (fireBaseUser, params) {
        return new Firebase(('https://' + fireBaseUser + '.firebaseio.com' + (params ? params : ' ')).trim());
      }
    };
  }
);