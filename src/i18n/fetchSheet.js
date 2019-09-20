const fs = require("fs");
const path = require('path');
const request = require('request');

const text_path = path.join(__dirname, 'text.json');
const { SHEETID, KEY } = require(path.join(__dirname, 'const.js'));
const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/';

const writer = fs.createWriteStream(text_path, {
  encoding: 'utf8'
});

request(`${baseUrl}${SHEETID}?includeGridData=true&key=${KEY}`, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    writer.write(JSON.stringify(JSON.parse(body).sheets[0].data[0].rowData));
  }
})