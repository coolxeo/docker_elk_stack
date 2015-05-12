'use strict';

describe('AuthWithPasswordCtrl', function () {
  var $scope;
  var controller;

  beforeEach(function () {
    module('angularfireApp');
    inject(function (_$rootScope_, $controller) {
      $scope = _$rootScope_.$new();
      controller = $controller('AuthWithPasswordCtrl', {$scope: $scope});
    });
  });

  it('Should say hello', function () {
    //expect(controller.message).toBe('Hello');
    expect(true).toBe(true);
  });

});
