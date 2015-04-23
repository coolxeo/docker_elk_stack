# This is a comment
FROM ubuntu:14.04
MAINTAINER Sloppy Lopez <slopez@estudioweb130.com>

# Dependencies
RUN apt-get update -qq
RUN sudo apt-get install -y -qq nginx-full wget vim

# Kibana
RUN mkdir -p /opt/kibana
RUN wget https://download.elasticsearch.org/kibana/kibana/kibana-4.0.2-linux-x64.tar.gz -O /tmp/kibana.tar.gz && \
 tar zxf /tmp/kibana.tar.gz && mv kibana-4.0.2-linux-x64/* /opt/kibana/

# Configs
ADD kibana.yml /opt/kibana/config/kibana.yml
ADD users.htpasswd /opt/kibana/node_modules/http-auth/data/users.htpasswd

EXPOSE 5601

CMD /opt/kibana/bin/kibana
