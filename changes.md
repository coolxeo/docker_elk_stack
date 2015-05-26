## 0.0.9-feel-like-a-sir TBR
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

    FEATURES ADDED:
        * 100% coverage integration test
        * Protractor e2e test

## 0.0.8-feel-like-a-sir DO NOT USE THIS VERSION! I've discovered docker won't run because of Jenkins
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

    FIXED BUGS:
        * Incorrect Firebase params in constants.js

## 0.0.7-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
          
    FIXED BUGS:
        * Fixed bug when login because the promise was wrongly implemented

    FEATURES ADDED:
        * Encrypted sensitive information in the Travis build
        * Protractor e2e test

## 0.0.6-feel-like-a-sir

    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins

    FEATURES ADDED:
        * Added full Travis CI and CD integration

## 0.0.5-feel-like-a-sir

    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          
    KNOWN BUGS:          
        * Fixed login bug in angular client, now you can log 
          from any device

## 0.0.4-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Cleaned and documented and running out of the box

## 0.0.3-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Added Karma to prerequisites_install.sh

## 0.0.2-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Working 100x100 out of the box following the instructions

## 0.0.1-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Wrong redirection after authWithPassword
        * Spinner was not fitting perfectly again...

## 0.0.1-alpha

    BUGS FIXED:
        * Fixed failure in docker build the stop of jdk distribution from docker repo
        * Spinner was not fitting perfectly.

    FEATURES:Build frameworks working:Docker, Grunt and Yeoman
             Test framework working:Karma combined with Mocha and Chai
             Angular-Firebase integration 50%, remains undone 'chat' and 'three-way data binding'
             Angular client working including:
                Full user authentication
                Rss filtering using the elastic search in the docker stack
                Kibana working
                Logstash working
                Elastic Search working
                Nodeapi persisting rss in the EL

    KNOW ISSUES:The docker elk stack it's not online yet... i will deploy in Heroku
                or AWS ASAP!!!! :)
