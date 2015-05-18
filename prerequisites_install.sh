#!/bin/bash
#Pre-requisites
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install wget
sudo apt-get install curl
sudo apt-get install git

#Fix for node first install http://stackoverflow.com/questions/21168141/can-not-install-packages-using-node-package-manager-in-ubuntu
sudo ln -s /usr/bin/nodejs /usr/bin/node

#Docker
wget -qO- https://get.docker.com/ | sh
#sudo usermod -aG docker <YOUR_UBUNTU_USER>

#Docker-Compose 
sudo curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

#Code Climate coverage
sudo npm install -g codeclimate-test-reporter
#Grunt
sudo npm install -g grunt grunt-cli
#Bower
sudo npm install -g bower
#Firebase Tools
sudo npm install -g firebase-tools

# Add a repo where JDK can be found.
sudo apt-get install -y software-properties-common
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update

# Auto-accept the Oracle JDK license
echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
sudo apt-get install -y oracle-java8-installer

#Check versions of installed dependencies
java -version
docker --version
nodejs -v
npm -v
git --version
uname -r
