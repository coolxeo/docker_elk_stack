## docker has stopped distributing images with java pre-installed :_(
    We use this problem to generate an opportunity, we will start using

        http://phusion.github.io/baseimage-docker/#solution
        https://github.com/phusion/baseimage-docker

    Which aims to be a lightweight docker friendly minimal ubuntu image, that
    will allow us to consume much less memory in our docker stack

##Upgrade docker
    wget -N https://get.docker.com/ | sh

##Useful commands
    docker ps  -> list containers
    docker run -d  -> run in detached mode
    docker build .  -> build docker image
    docker ps  -> list containers
    docker ps  -> list containers

##Build
    $ docker run -t -i <YOUR_NAME_IMAGE> /sbin/my_init -- bash -l


