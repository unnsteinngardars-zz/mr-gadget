/* eslint-disable no-undef */
db.auth('root', 'password');

db = db.getSiblingDB('dev-database');

db.createUser({
  user: 'db-user',
  pwd: 'db-password',
  roles: [
    {
      role: 'readWrite',
      db: 'dev-database',
    },
  ],
});
