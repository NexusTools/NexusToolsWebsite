#!/bin/bash

export WORKER_COUNT=1
export NODE_ENV=development
export HTTP_PORT=8080

nw ./dev &

while true;
do git pull;
npm start 2>&1 | tee log.txt
done