<img src="https://codeclimate.com/github/sloppylopez/docker_elk_stack/badges/gpa.svg" /> Flawless Victory, Fatality!

[https://codeclimate.com/github/sloppylopez/docker_elk_stack]

https://sloppylopez.firebaseapp.com/   <a href="https://github.com/sloppylopez/docker_elk_stack/releases/tag/v0.0.1-feel-like-a-sir">v0.0.1-feel-like-a-sir</a> RELEASED! ![alt tag](http://i3.kym-cdn.com/photos/images/original/000/161/140/feel-like-a-sir-template.jpg)

## Angular + Nodejs + ELK + Docker + Docker-Compose + RSS
Front-End Angular, Back-End Nodejs, Docker running 3 servers with ELK stack orchestrated with Docker-compose

This project it's 3 virtual machines build with docker and docker-compose for the orchestration of the 3 services, Elastic search, Logstash and Kibana, also there is a front-end angular client, and a backend nodejs that includes a elastic search client to consume rss from any website and persist them in the EL in a bulk process, then you can visualize them in the angular frontend and do the tipical text search over the rss's

It can be used as a seed for a project with that structure or similar, it saves a lot of 'default work' to set everything together.

There are 3 separate parts :

##angularclient
Implemented using Yeoman, mild default instalation, it uses Karma for testing and Grunt for building
###*Use the run scripts in the folder to run it

##nodeapi
Implemented using Nodejs, it gets rss from any source and bulks the data in Elastic Search using json format, this part will become a Nodejs module in the future, and I will use a RESTful api, but that part it's still to be defined, this is just a node server with Express 4 and a Elastic Search client with a Xml parser for retrieving, parsing and persisting in EL
###*Use the run scripts in the folder to run it

##dockers
This is the FUN part, based on this article (http://thepracticalsysadmin.com/running-elk-on-docker/)
It's 3 virtual machines one per each element of the stack, connected between them with minimum configuration, if you check inside each folder there is one the Dockerfile to create each
container, plus the instructions to download and configure,USING the rest of the files of each folder to have a complete running setup once all dependencies have been downloaded by Docker
###*Use the run scripts in the folder to run it, it works out of the box.

PULL AND PLAY!!!!

I will keep updating the project often

###Keep it stupid!, simple.

![alt tag](http://lh3.ggpht.com/ZpL4xc4OOMqiKxrLzJ3w33AOlu5ERX4ZbAsEWqSBQWeLYLF2hybEw11D5msBRLtGY1DoKYMI-A8VBx3yvwpNNUmr=s250)

### To build:

Prerequisites :

    * Linux
    * Python 2.6 or 2.7
    * Nodejs "node": ">=0.12.0"
    * Npm
    * Bower
    * Git
    * Docker
    * Docker-compose

### To build:FIRST INSTALL!
    1) sudo sh prerequisites_install.sh
    2) sudo sh run_dockers.sh
    3) cd angularclient && change ./script/constants.js 
    to match your values, basically after 2) you can discover 
    the docker ip doing ipconfig and so on
    4) sudo npm install;bower install
    5) firebase init
    6) grunt serve
    *NOTES:
        1) removes the boiler plate of the dependencies
        (still room for improvement but working perfect in 14.04)
        2) builds and runs the backend (ELK Stack)
        5) initialize firebase (only once)
        4)3)6) it's for running the client, to visualize the data
        that came from nodeapi to elasticsearch, and from 'el' to
        angular, if you see this instalation it's complete correctly


###After install:
        1) http://localhost:9000/#/    angularclient
        1) http://localhost:5601/      kibana
        1) http://localhost:8081/api   nodeapi
        1) http://localhost:8081/api   nodeapi

    
###Next steps:
            
    1)Merge with https://github.com/firebase/firereader
    this will eliminate all the boiler plate of managing and displaying
    nicely the feeds, because the real intention of this project is not
    displaying rss through a Elastic Search, but to analyze those rss
    to extract information using Spark or similar.

    2)Fix known bug when deploy the minified code,
    you cannot log sometimes in firebase with mobile
    devices for some voodoo reason because it does
    not give any error

    3)Finish test coverage
           
    4)Finish test e2e with protractor

    5)Deploy docker back-end ,i am not quite sure how
    much ram will need this to work, i will test calmly
    using virtual box but this process can take time,
    because i am going to try to deploy it for
    free, not sure if this can de done easily, or if will
    have to give up and pay :_(




