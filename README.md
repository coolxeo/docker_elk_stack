## Angular + Firebase + Nodejs + ELK + Docker + Docker-Compose + RSS
[![Code Climate](https://codeclimate.com/github/sloppylopez/docker_elk_stack/badges/gpa.svg)](https://codeclimate.com/github/sloppylopez/docker_elk_stack) Flawless Victory, Fatality!

[![Travis](https://travis-ci.org/sloppylopez/docker_elk_stack.svg)](https://travis-ci.org/sloppylopez/docker_elk_stack)

[![Test Coverage](https://codeclimate.com/github/sloppylopez/docker_elk_stack/badges/coverage.svg)](https://codeclimate.com/github/sloppylopez/docker_elk_stack/coverage) Fair enough :_(

<a href="https://github.com/sloppylopez/docker_elk_stack/releases/tag/v0.0.6-feel-like-a-sir">v0.0.6-feel-like-a-sir</a> RELEASED! 

![alt tag](http://i3.kym-cdn.com/photos/images/original/000/161/140/feel-like-a-sir-template.jpg)

##FEATURES SO FAR:
1) CI and CD with Travis, Code climate and Firebase, plus code climate it's integrated with github issues
   so he will automatically create a github issue when quality of code decreased after a PR

2) Scaffolding of angular client done with Yeoman (default angular generator)

3) User management, including email verification fully integrated using angularfire

4) Plain default mild installation of all components, bower, npm, docker which
  means the whole project is mainstreamed at maximum, no hacky shit, no wheel
  reinventions (at least that i am aware of)
  
5) Run in almost all devices and browsers(IE8+ and all the rest) and it's responsive

6) Completely logicless form validation using new angular 1.3 directive ng-messages

This 2 lines make all the validation, including displaying the custom error messages for each case
which completely erases the boiler plate of form validation, this is the so called 'angular way'
>< input id="username" type="email" name="email" class="form-control" ng-model="user.email" required email/>

>< div ng-messages="loginForm.email.$error" ng-messages-include="views/errors.html" class="errors"></div>
   
##INTENDED FEATURES:   

1)Manage jenkins and docker cluster with rancher

##INTRO:
Front-End Angular, Back-End Nodejs, Docker running 3 servers with ELK stack orchestrated with Docker-compose

This project it's 3 virtual machines build with docker and docker-compose for the orchestration of the 3 services, Elastic search, Logstash and Kibana, also there is a front-end angular client, and a backend nodejs that includes a elastic search client to consume rss from any website and persist them in the EL in a bulk process, then you can visualize them in the angular frontend and do the tipical text search over the rss's

It can be used as a seed for a project with that structure or similar, it saves a lot of 'default work' to set everything together.

There are 2 main goals in this project

1)Create a 'seed' that can be reused everytime you need to build a web-app with similar characteristics
like in this case angular, node and elk

2)Use the finished version of this project to build something over it, like for example without
entering yet in many details, extract info from the rss news stored with Spark or a similar technology
IN REAL TIME

This are the 3 separate parts :

##angularclient
Implemented using Yeoman, mild default installation, it uses Karma for testing and Grunt for building
Includes angular-fire a implementation of firebase client for angular, we use it as a Baas (Backend
as service), this is much more than a database, you can deploy you project in production with 1
command, it has a nice web interface to maintain the back-end, including non-google-web-analytics,
user management, testing console, and many nice options that erase the boiler plate of 'deploying in
prod'/'managing a server'/'managing a backend' for your FRONT-END application, it simply works out of the box
the project has implemented USER EMAIL VALIDATION using firebase Baas magic and angularfire modules.
###*See how to run below

##nodeapi
Implemented using Nodejs, it gets rss from any source and bulks the data in Elastic Search using json format, this part will become a Nodejs module in the future, and I will use a RESTful api, but that part it's still to be defined, this is just a node server with Express 4 and a Elastic Search client with a Xml parser for retrieving, parsing and persisting in EL
###*Runs with docker-compose in the elk-stack

##dockers
This is the FUN part, based on this article (http://thepracticalsysadmin.com/running-elk-on-docker/)
It's 3 virtual machines one per each element of the stack, connected between them with minimum configuration, if you check inside each folder there is one the Dockerfile to create each
container, plus the instructions to download and configure,USING the rest of the files of each folder to have a complete running setup once all dependencies have been downloaded by Docker
###*Use the run scripts in the folder to run it, it works out of the box.

PULL AND PLAY!!!!

(_̅_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_̅_̅_̅_̅_̅_̅()ڪ

###Keep it stupid!, simple.

![alt tag](http://lh3.ggpht.com/ZpL4xc4OOMqiKxrLzJ3w33AOlu5ERX4ZbAsEWqSBQWeLYLF2hybEw11D5msBRLtGY1DoKYMI-A8VBx3yvwpNNUmr=s250)

### To build the whole stack and client:
I only give Linux support for the moment, in the future I will probably cover Windows as well.
I want you to understand that this project it's literally building 4 servers, each one configured with
1 different and complementary technology, which are visible between them with minimum configuration
which at the same time integrates with a dockerized built CD and CI using jenkins, as you can imagine
doing all this with only 10 steps it's really a time saver, but also I am saying this to make you understand
that i noticed when installing sometimes problems with components, specially with grunt, when doing the steps
when had to execute 'grunt serve' it gives an wierd error, and the project does not launch, this has happened
several times with the testing of the 100x100 out of the box working installation, however, after deleting
node_modules, .temp, dist and bower_components and reinstalling them again it simply started to work,
this is the only pitfall i can find in the instalation, just to make you aware. so if you see this try what
told you and it will work

Prerequisites :

    > Linux
    > Python >=2.6
    > Nodejs >=0.12.0
    > Npm
    > Bower
    > Git
    > Docker >=1.6.0
    > Karma
    > Grunt
    > Docker-compose
    > Ruby

### To build:FIRST INSTALL!
    Notice that 1) it's intended for plain Ubuntu, if you have already java, npm and so on, 
    you should not use 1) because it can mess up your working environment, my suggestion to 
    try this is to use Virtual Box with a clean ubuntu install, If you met 
    pre-requisites it should work without 1) but i can't test so many scenarios so im not
    100% sure what would happen if you try to install it without 1)

    1) modify prerequisites_install.sh to add your credentials
    2) sudo sh prerequisites_install.sh
    3) sudo sh run_dockers.sh
       if you get an error saying docker daemon is not up just do 'docker -d' and do 2) again
    4) change angularclient/script/constants.js to match your own values, 
       basically after 2) you can discover the docker ip doing ifconfig and such.
    5) sudo npm install;bower install
    6) mkdir dist
       (to create the dist directory which we will use to deploy in firebase)
    7) firebase init
    8) grunt serve
    9) Load rss in elasticsearch with fresh rss news:
       http://localhost:8081/api/rssload
    10) go to https://travis-ci.org/<YOUR_GIT_USER>/<YOUR_GIT_PROJECT_NAME>/settings/env_vars and create 3 env variables
       and add this env vars
       - CODECLIMATE_REPO_TOKEN=<YOUR_CODECLIMATE_REPO_TOKEN>
       - FIREBASE_USER=<YOUR_FIREBASE_USER>
       - FIREBASE_PASSWORD=<YOUR_FIREBASE_PASSWORD>
       
    *NOTES:
        2) removes the boiler plate of the dependencies
        3) builds and runs the backend (ELK Stack)
        4)5)8) it's for running the client, to visualize the data
           that came from nodeapi to elasticsearch, and from elastic 
           search to angular, if you can see the rss news in angular,
           it's complete correctly instaled
        6) creates a release inside 'dist' folder, needed for firebase
        7) initialize firebase (only first time, this is only 
           needed for deploying angularclient in firebase hosting)

###To deploy in production:
        Pre-requisites:
            A)Firebase account (free)
            B)'firebase init' command executed in angularclient. he will promp you questions, i recommend to choose
            the folder ./dist as the folder firebase will deploy in prod since 'grunt build' will put the minified
            version of our js and css there
            C)Change constants.js in angularclient to match your credentials
            
        1)grunt build
        2)firebase deploy

###After install:
        1) http://localhost:9000/#/    angularclient
        2) http://localhost:5601       kibana
        3) http://localhost:8081/api   nodeapi
        4) http://localhost:9200       elasticsearch
        5) http://localhost:8080       jenkins

    
###Next steps:(Changed priorities 22-may-2015)
    1)Start using rancherOS for cooking the images, 
    so i will change Kibana, Logstash and EL to start
    using rancherOS(Dedicated docker OS) instead of
    phusion image we are using right now, i think
    this is the way to go
    
    2)Start using rancher to manage jenkins slaves

    3)Finish test coverage
           
    4)Finish test e2e with protractor

    5)Deploy docker back-end ,i am not quite sure how
    much ram will need this to work, i will test calmly
    using virtual box but this process can take time,
    because i am going to try to deploy it for
    free, not sure if this can de done easily, or if will
    have to give up and pay :_(
    
    6)Merge with https://github.com/firebase/firereader
    this will eliminate all the boiler plate of managing and displaying
    nicely the feeds, because the real intention of this project is not
    displaying rss through a Elastic Search, but to analyze those rss
    to extract information using Spark or similar.
