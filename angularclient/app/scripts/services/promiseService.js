'use strict';
//not used yet, i will use it to take common factor of put the redirection in the controller instead of in the service
angular.module('angularfireApp')
  .service('promiseService', [function () {
    this.reject = function reject($q, error) {
      var def = $q.defer();
      def.reject(error);
      return def.promise;
    }
    this.resolve = function resolve($q, val) {
      var def = $q.defer();
      def.resolve(val);
      return def.promise;
    };
  }]);
