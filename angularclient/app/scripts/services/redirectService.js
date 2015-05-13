'use strict';
app
  .service('fooService', [function () {
    this.redirectTo = function ($location, redirectTo) {
      if (typeof redirectTo !== 'undefined') {
        console.log('redirecting to ' + redirectTo);
        $location.path(redirectTo);
      }
    };
  }]);
