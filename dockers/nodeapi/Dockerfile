#http://phusion.github.io/baseimage-docker/#solution
#https://github.com/phusion/baseimage-docker

# Use phusion/baseimage as base image. To make your builds
# reproducible, make sure you lock down to a specific version, not
# to `latest`! See
# https://github.com/phusion/baseimage-docker/blob/master/Changelog.md
# for a list of version numbers.
# using latest version 0.9.16

FROM phusion/baseimage:0.9.16
#FROM ubuntu:14.04
MAINTAINER Sloppy Lopez <slopez@estudioweb130.com>

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# ...put your own build instructions here...
# Env Variables
ENV GIT_BASE_FOLDER=docker_elk_stack
ENV PROJECT_NAME=nodeapi
ENV GIT_USER=sloppylopez
ENV NODE_VERSION=0.12
ENV ROOTFOLDER=opt

# Workdir
WORKDIR $ROOTFOLDER

# Dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    git \
    python

# Install
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | sudo bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/$GIT_USER/$GIT_BASE_FOLDER.git
RUN cd ./$GIT_BASE_FOLDER/$PROJECT_NAME;npm install

# nodejs port
EXPOSE  8081

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD node ./$GIT_BASE_FOLDER/$PROJECT_NAME/server.js

# ...put your own build instructions here...