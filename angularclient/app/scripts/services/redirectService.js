'use strict';
//not used yet, i will use it to take common factor of put the redirection in the controller instead of in the service
app
  .service('redirectService', [function () {
    this.redirectTo = function ($location, redirectTo) {
      if (typeof redirectTo !== 'undefined') {
        console.log('redirecting to ' + redirectTo);
        $location.path(redirectTo);
      }
    };
  }]);
