#!/bin/bash
#Pre-requisites
sudo apt-get install node
sudo apt-get install npm
sudo apt-get install wget
sudo apt-get install curl

#Docker
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker ubuntu

#Docker-Compose
curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

#Code Climate coverage
sudo npm install -g codeclimate-test-reporter

#Grunt
sudo npm install -g grunt-cli

# Add a repo where OpenJDK can be found.
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update

# Auto-accept the Oracle JDK license
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer

echo java -version
echo docker -version
echo npm -version
echo node -v

