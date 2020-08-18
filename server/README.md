# Server

## Install Docker

You find instructions on how to install docker [here](https://docs.docker.com/get-docker/)

## Run Server

1. Run `npm install` to install dependencies
2. Run `npm run start:docker` to start the server in a docker container

## Seed data
Make sure that the application and the database is up and running via the `npm run start:docker` command

Run `npm run migrate:seed` to populate the local development database with seed data

Run `npm run migrate:reset` to reset the local development database to an empty state

### Possible pitfalls
It might be the case that port `27019` is already bound on your localhost, if so you need to free it up.