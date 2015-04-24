FROM ubuntu:14.04

ENV GIT_PROJECT=docker_elk_stack
ENV GIT_USER=sloppylopez
ENV NODE_SERVER=node_rss_parser_elastic
WORKDIR /opt

# Dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    git \
    python

RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN sudo apt-get install -y nodejs
RUN git clone https://github.com/$GIT_USER/$GIT_PROJECT.git
RUN cd ./$GIT_PROJECT/$NODE_SERVER

# nodejs port
EXPOSE 3000

CMD npm install
CMD nodejs index.js

