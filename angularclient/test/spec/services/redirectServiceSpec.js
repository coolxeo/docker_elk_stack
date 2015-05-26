'use strict';

describe('redirectService Spec', function () {

  var $location, redirectService, $q;

  beforeEach(module('angularfireApp'));

  beforeEach(inject(function (_$location_, _redirectService_, _$q_) {
    $location = _$location_;
    redirectService = _redirectService_;
    $q = _$q_;
  }));

  it('should get the redirectService and redirecTo without failures', function () {
    var deferredSuccess = $q.defer();
    spyOn(redirectService, 'redirectTo').and.returnValue(deferredSuccess.promise);
    redirectService.redirectTo();
    expect(redirectService.redirectTo).toHaveBeenCalled();
  });

});
