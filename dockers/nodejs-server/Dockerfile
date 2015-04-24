FROM ubuntu:14.04

ENV DEBIAN_FRONTEND noninteractive
ENV NGINX_VER 1.5.0.rc2
ENV GIT_PROJECT=docker_elk_stack
ENV GIT_USER=sloppylopez
ENV NODE_SERVER=node_rss_parser_elastic
WORKDIR /opt

# Dependencies
# Note the new setup script name for Node.js v0.12
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    git \
    python

RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN sudo apt-get install -y nodejs
RUN git clone https://github.com/sloppylopez/docker_elk_stack.git
RUN cd /opt/docker_elk_stack/node_rss_parser_elastic;npm install




# Dependencies
#RUN apt-get update -qq && \
# apt-get install -y -qq \
# wget \
# python \
# openjdk-7-jre-headless

# Install Logstash
#RUN wget --quiet "https://download.elasticsearch.org/logstash/logstash/logstash-$LOGSTASH_VER.tar.gz" -O "/opt/logstash-$LOGSTASH_VER.tar.gz" --no-check-certificate && \
# tar zxf logstash-$LOGSTASH_VER.tar.gz && \
# mv logstash-$LOGSTASH_VER logstash

# Install plugins
#RUN /opt/logstash/bin/plugin update logstash-output-zeromq
#RUN /opt/logstash/bin/plugin install logstash-input-log-courier

# Config files
#ADD server.conf /etc/logstash/server.conf
#ADD logstash-forwarder.key /etc/logstash/logstash-forwarder.key
#ADD logstash-forwarder.crt /etc/logstash/logstash-forwarder.crt

# lumberjack port
#EXPOSE 4545
# log-courier port
#EXPOSE 4546

#CMD /opt/logstash/bin/logstash -f /etc/logstash/server.conf
