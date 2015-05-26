'use strict';

angular.module('angularfireApp')
  .service('promiseService', [function () {
    this.reject = function reject(def, error) {
      return def.reject(error);
    };
    this.resolve = function resolve(def, val) {
      return def.resolve(val);
    };
  }]);
