## Angular + Nodejs + ELK + Docker + Docker-Compose + RSS
Front-End Angular, Back-End Nodejs, Docker running 3 servers with ELK stack orchestrated with Docker-compose

This project it's 3 virtual machines build with docker and docker-compose for the orchestration of the 3 services, elastic search, logstash and kibana, also there is a front-end angular client, and a backend nodejs that includes a elastic search client to consume rss from any website and persist them in the EL in a bulk process, then you can visualize them in the angular frontend and do the tipical text search over the rss's

It can be used as a seed for a project with that structure or similar, it saves a lot of 'default work' to set evering together.

There are 3 separate parts :

##angular_rss_client
Implemented using Yeoman, mild default instalation, it uses Karma for testing and Grunt for building
*Use the run scripts in the folder to run it

##node_rss_parser_elastic
Implemented using Nodejs, it get's rss from any source of RSS and bulks the data in Elastic Search in Json format, this part will become a Nodejs module in the future,and I will use a RESTfull api, but that part it's still to be defined, this is just a node server with Hapi and a Elastic Search client with a Xml parser for retrieving, parsing and persisting in EL
*Use the run scripts in the folder to run it

##dockers
This is the FUN part, based on this article (http://thepracticalsysadmin.com/running-elk-on-docker/)
It's 3 virtual machines one per each element of the stack, connected between them with minimum configuration, if you check inside each folder there is one the DOckerfile to create each
container, plus the instructions to download and configure,USING the rest of the files of each folder to have a complete running setup once all dependencies have been downloaded by Docker
*Use the run scripts in the folder to run it




I will keep updating the project often

Enjoy!  (_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_(_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_(_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_(_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_̅_̅_̅_̅()ڪڪڪ
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


Windows: first unpack latest ICU to `deps/icu`
  [icu4c-**##.#**-src.tgz](http://icu-project.org/download) (or `.zip`)
  as `deps/icu` (You'll have: `deps/icu/source/...`)

```sh
vcbuild full-icu
```

Resources for Newcomers
---
  - [The Wiki](https://github.com/joyent/node/wiki)
  - [nodejs.org](http://nodejs.org/)
  - [how to install node.js and npm (node package manager)](http://www.joyent.com/blog/installing-node-and-npm/)
  - [list of modules](https://github.com/joyent/node/wiki/modules)
  - [searching the npm registry](http://npmjs.org/)
  - [list of companies and projects using node](https://github.com/joyent/node/wiki/Projects,-Applications,-and-Companies-Using-Node)
  - [node.js mailing list](http://groups.google.com/group/nodejs)
  - irc chatroom, [#node.js on freenode.net](http://webchat.freenode.net?channels=node.js&uio=d4)
  - [community](https://github.com/joyent/node/wiki/Community)
  - [contributing](https://github.com/joyent/node/wiki/Contributing)
  - [big list of all
