'use strict';

angular.module('angularfireApp')
  .directive('fadeIn', function () {
    return {
      compile: function (elm) {
        $(elm).css('opacity', 0.0);
        return function (scope, elm) {
          $(elm).animate({opacity: 1.0}, 1500);
        };
      }
    };
});
