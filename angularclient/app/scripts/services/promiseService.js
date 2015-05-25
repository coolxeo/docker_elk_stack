'use strict';

angular.module('angularfireApp')
  .service('promiseService', [function () {
    this.reject = function reject(def, error) {
      def.reject(error);
      return def.promise;
    }
    this.resolve = function resolve(def, val) {
      def.resolve(val);
      return def.promise;
    };
  }]);
