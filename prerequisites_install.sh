#!/bin/bash
#Pre-requisites
sudo apt-get install node
sudo apt-get install npm
sudo apt-get install wget
sudo apt-get install curl
sudo apt-get install git

#Docker
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker sloppylopez

#Docker-Compose !FOR SOME REASON THIS 2 LINES WONT WORK while executed via sh, try sudo su , then 1 first line, then exit, then second line and it should work
sudo curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

#Code Climate coverage
sudo npm install -g codeclimate-test-reporter

#Grunt
sudo npm install -g grunt grunt-cli

# Add a repo where JDK can be found.
sudo apt-get install -y software-properties-common
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update

# Auto-accept the Oracle JDK license
echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
sudo apt-get install -y oracle-java8-installer

#Init Docker daemon
sudo docker -d

java -version
docker --version
npm --version
node --v
git --version
uname -r