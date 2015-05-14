##Test framework description

  'describe', 'beforeEach', and 'it' are provided by Mocha for 
  organizing our tests.
  'module' and 'inject' are provided by ngMock. 
  module registers the ngMock module on our module named 'angularfireApp' 
  without us needing to explicitly include 'ngMock' in the second 
  argument to angular.module. 
  Next we call inject with a function that takes an argument 
  _firebaseServiceFactory_. 
  When using ngMock, Angular will automatically strip away 
  leading and trailing underscores from the function we pass for 
  the injector to invoke.
  'expect' comes from Chai for checking correct values are in place
