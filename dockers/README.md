Base Article http://thepracticalsysadmin.com/running-elk-on-docker/

## docker has stopped distributing images with java pre-installed ![alt tag](http://www.clker.com/cliparts/f/7/d/e/1339641514467388466forever%20alone-th.png)
    We use this problem to generate an opportunity, we will start using

        http://phusion.github.io/baseimage-docker/#solution
        https://github.com/phusion/baseimage-docker

    Which aims to be a lightweight docker friendly minimal ubuntu image, that
    will allow us to consume much less memory in our docker stack

##Upgrade docker
    wget -N https://get.docker.com/ | sh

##Useful commands
    sudo docker ps  -> list containers
    sudo docker run -d  -> run in detached mode
    sudo docker build .  -> build docker image
    sudo docker build -t maestrodev/build-agent .  -> build docker image
    sudo docker run -t -i ubuntu:14.04 /bin/bash   -> build a server with jenkins

##Single Run(phusion images only)
    $ docker run -t -i <YOUR_NAME_IMAGE> /sbin/my_init -- bash -l


##dockers
It's 3 virtual machines one per each element of the stack, connected 
between them with minimum configuration, if you check inside each folder 
there is one Dockerfile to create each container, plus the instructions 
to download and configure,USING the rest of the files of each folder to 
have a complete running setup once all dependencies have been downloaded 
by Docker
###*Use the run scripts in the folder to run it, it works out of the box.

    Prerequisites :

        * Linux
        * Docker
        * Docker-compose

    A PROBLEMAS... SOLUCIONES!!!!



