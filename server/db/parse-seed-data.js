const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');
const debug = require('debug')('server:parser');

function createKeyToValueMap(records) {
  let data = records;
  const first = data[0];
  data = data.slice(1, data.length);
  return data.map((record) => record.reduce((acc, curr, index) => {
    const key = first[Number.parseInt(index, 10)].toLowerCase();
    if (key !== 'id') {
      acc[first[Number.parseInt(index, 10)].toLowerCase()] = curr;
    }
    return acc;
  }, {}));
}

async function getSeedData() {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const content = await fs.readFile(`${__dirname}/seed-data.csv`);
  let records = parse(content);
  records = createKeyToValueMap(records);
  debug(`Successfully parsed ${records.length} entries of seed data`);
  return records;
}

module.exports = getSeedData;
