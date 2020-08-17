/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const getSeedData = require('../parse-seed-data');

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createCollection('gadgets').then(async () => {
    const data = await getSeedData();
    db.insert('gadgets', data);
  });
};

exports.down = function (db) {
  return db.dropCollection('gadgets');
};

exports._meta = {
  version: 1,
};
