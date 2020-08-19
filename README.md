# mr-gadget
Assignment for Salt Pay

## Install Docker

You find instructions on how to install docker [here](https://docs.docker.com/get-docker/)

## Install dependencies

Dependencies can be installed in both `server` and `client` by running npm install \

Or you can install all of them from the root by 
running `npm run install`

## Run the application

Run `npm run start` to start the docker containers \
or `npm run start:d` to start the docker containers in detached mode

## Seed data

Make sure that the containers are running

Run `npm run migrate:seed` to seed the database \
and `npm run migrate:reset` to reset the database

Both commands are also available within the `server` directory

## Possible pitfalls
It might be the case that port `27019` is already bound on your localhost, if so you need to free it up since the migration tool needs to connect to the database from the host