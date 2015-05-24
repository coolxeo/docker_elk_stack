'use strict';

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
