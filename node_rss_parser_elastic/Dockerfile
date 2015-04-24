FROM ubuntu:14.04

# Env Variables
ENV GIT_PROJECT=docker_elk_stack
ENV GIT_USER=sloppylopez
ENV NODE_SERVER=node_rss_parser_elastic
ENV ROOT=opt
ENV DESTINATION_FOLDER=src

# Workdir
WORKDIR $ROOT

# Dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    git \
    python

# Install
RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/$GIT_USER/$GIT_PROJECT.git
RUN cd /$ROOT/$GIT_PROJECT/$NODE_SERVER/$DESTINATION_FOLDER;

# Install app dependencies
RUN npm install

# nodejs port
EXPOSE  8080

CMD ["nodejs", "/$ROOT/$GIT_PROJECT/$NODE_SERVER/$DESTINATION_FOLDER/index.js"]