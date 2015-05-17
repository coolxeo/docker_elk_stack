<img src="https://codeclimate.com/github/sloppylopez/docker_elk_stack/badges/gpa.svg" />
[https://codeclimate.com/github/sloppylopez/docker_elk_stack]

https://sloppylopez.firebaseapp.com/   v0.0.1-feel-like-a-sir RELEASED! ![alt tag](http://i3.kym-cdn.com/photos/images/original/000/161/140/feel-like-a-sir-template.jpg)

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

Enjoy!


  __                                                    
 /    /                          /                      
(___ (  ___  ___  ___           (     ___  ___  ___  ___
    )| |   )|   )|   )\   )     |   )|   )|   )|___) __/
 __/ | |__/ |__/ |__/  \_/      |__/ |__/ |__/ |__  /__ 
            |    |      /                 |             


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
    
###Next steps:
            
           1)Fix known bug when deploy the minified code, 
           you cannot log sometimes in firebase with mobile
           devices for some voodoo reason because it does 
           not give any error
           
           2)Finish test coverage
           
           3)Finish test e2e with protractor
           
           4)Deploy docker back-end ,i am not quite sure how 
           much ram will need this to work, i will test calmly 
           using virtual box but this process can take time, 
           because i am going to try to deploy it for 
           free, not sure if this can de done easily, or if will 
           have to give up and pay :_(




