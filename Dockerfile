FROM node:19-bullseye-slim

WORKDIR /usr/local/clasp-test

RUN apt-get update && \
    apt-get install -y git && \
    \
    npm install -g @google/clasp
