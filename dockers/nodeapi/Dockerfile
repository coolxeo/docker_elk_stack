FROM ubuntu:14.04

MAINTAINER sloppylopez@estudioweb130.com

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
EXPOSE  8080

CMD node ./$GIT_BASE_FOLDER/$PROJECT_NAME/server.js