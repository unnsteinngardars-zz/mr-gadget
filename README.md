# Mr Gadget

An assignment for Salt Pay

## Install Docker

You find instructions on how to install docker [here](https://docs.docker.com/get-docker/)

## Install dependencies

Dependencies can be installed in both `server` and `client` by running npm install

Or you can install all of them from the root by running `npm run install`

## Run the application

From the root of the project, run `npm run start` to start the docker containers \
or `npm run start:d` to start the docker containers in detached mode

## Seed data

Make sure that the containers are running

Run `npm run migrate:seed` to seed the database \
and `npm run migrate:reset` to reset the database

Both commands are also available within the `server` directory

## Possible pitfalls

### Mongo
It might be the case that port `27019` is already bound on your localhost, if so you need to free it up since the migration tool needs to connect to the database from the host

### Eslint

For VS code users using eslint, since the two projects are in the same root, there could be issues with the linter in one of the two projects, to solve this add the following to your `settings.json` file at the root of the repository

```json
    "eslint.workingDirectories": [
      "client",
      "server"
    ]
```

## Extra information

## An example settings.json file for the current project

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.tabSize": 2,
      "editor.insertSpaces": true
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.tabSize": 2,
      "editor.insertSpaces": true
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.workingDirectories": [
      "client",
      "server"
    ]
}
```

## What I know that needs to be done

Unfortunately I do not have more time to spend in this but these are some things that I would consider next steps.

### Server
* Use the appropriate headers to inform the client if he has the most up to date data
* Friendly response when a gadget was not found
* Possibly adapt the api to support HATEOAS
* Add elastic search to improve the search

### Client
* Make responsive for tablet/mobile
* Write e2e tests with Cypress for happy paths

### Both
* Add CircleCI or some other CI/CD pipeline
* Set up Husky to prevent commits that do not pass the linter, also set up hook for running tests before pushing