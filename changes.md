## 0.0.5-feel-like-a-sir TBR

    KNOWN BUGS:
        * Can't log in with mobile devices
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196

    FEATURES ADDED:
        * I will have to keep jenkins because of the bug mentioned
          i want to be able to test the docker stack install,
          but i will keep travis because apart from that BIG
          limitation it's great and very easy, you only need to touch
          1 file to configure the tests, the rest simply works out of the box

## 0.0.4-feel-like-a-sir

    BUGS FIXED:
        * Fixed login bug in angular client, now you can log 
          from any device
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
