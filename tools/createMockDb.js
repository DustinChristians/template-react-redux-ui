/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const { messages, users } = mockData;
const data = JSON.stringify({ messages, users });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log('Mock DB created.');
});
