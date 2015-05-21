#!/usr/bin/env bash
rm -rf /var/run/docker.pid
docker -d
docker-compose build
docker-compose up
