#!/bin/bash
#Pre-requisites
#sudo apt-get install -y -qq build-essential TODO check if mandatory
sudo apt-get install -y -qq nodejs npm wget curl git python ruby-full

#Install travis-cli command line to be able to encrypt api_keys in the Travis build
sudo gem install travis
#Encrypt your code climate key for Travis build and add it automatically to your .travis.yml
#remember explicitly declare this variables in
#https://travis-ci.org/<YOUR_GIT_USER>/<YOUR_GIT_PROJECT_NAME>/settings/env_vars
travis encrypt CODECLIMATE_REPO_TOKEN=<YOUR_CODE_CLIMATE_TOKEN> --add
travis encrypt FIREBASE_USER=<YOUR_FIREBASE_USER> --add
travis encrypt FIREBASE_PASSWORD=<YOUR_FIREBASE_PASSWORD> --add

#Fix for node first install http://stackoverflow.com/questions/21168141/can-not-install-packages-using-node-package-manager-in-ubuntu
sudo ln -s /usr/bin/nodejs /usr/bin/node

#Docker
wget -qO- https://get.docker.com/ | sh
#For not having to do 'sudo docker' but this represents a security issue so i am leaving it unset by default
#sudo usermod -aG docker <YOUR_UBUNTU_USER>

#Docker-Compose 
sudo curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

#Install npm global dependencies
sudo npm install -g codeclimate-test-reporter grunt-cli bower firebase-tools yo generator-karma generator-angular karma-cli

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
ruby -v
uname -r