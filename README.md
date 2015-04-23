## Angular + Nodejs + ELK + Docker + Docker-Compose
Front-End Angular, Back-End Nodejs, Docker running 3 servers with ELK stack orchestrated with Docker-compose

This project it's 3 virtual machines build with docker and docker-compose for the orchestration of the 3 services, elastic search, logstash and kibana, also there is a front-end angular client, and a backend nodejs that includes a elastic search client to consume rss from any website and persist them in the EL in a bulk process, then you can visualize them in the angular frontend and do the tipical text search over the rss's

It can be used as a seed for a project with that structure or similar, it saves a lot of 'default work' to set evering together.

There are 3 separate parts :

##angular_rss_client
Implemented using Yeoman, mild default instalation, it uses Karma for testing and Grunt for building

##node_rss_parser_elastic
Implemented using Nodejs, it get's rss from any source of RSS and bulks the data in Elastic Search in Json format, this part will become a Nodejs module in the future,and I will use a RESTfull api, but that part it's still to be defined, this is just a node server with Hapi and a Elastic Search client with a Xml parser for retrieving, parsing and persisting in EL

##dockers

I will keep updating the project often

Enjoy!  (_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_(_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_̅_̅_̅_̅()ڪڪڪ
===

### To build:

Prerequisites :

    * Linux
    * Python 2.6 or 2.7
    * Nodejs "node": ">=0.10.0"
    * Npm
    * Bower
    * Git
    * Docker
    * Docker-compose
