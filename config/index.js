
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const myEnv = dotenv.config();
dotenvExpand(myEnv);
console.log('myEnv', myEnv);

module.exports = {
  apiUrl: process.env.API_URL,
};
