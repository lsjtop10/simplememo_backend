#bin/bash

dockerize -wait tcp://mysql:3306 -wait tcp://mongodb:27017

npm run start 