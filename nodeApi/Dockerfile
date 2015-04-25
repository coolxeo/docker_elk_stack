FROM ubuntu:14.04

MAINTAINER sloppylopez@estudioweb130.com

# Env Variables
ENV GIT_PROJECT=docker_elk_stack
ENV SERVER=nodeApi
ENV SRC=src
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
RUN git clone https://github.com/$GIT_USER/$GIT_PROJECT.git
RUN cd ./$GIT_PROJECT/$SERVER/$SRC;npm install

# nodejs port
EXPOSE  3000

CMD node /docker_elk_stack/nodeApi/src/index.js