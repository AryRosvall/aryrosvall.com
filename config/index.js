require('dotenv').config();

console.log('process.env.API_URL', process.env.API_URL);

module.exports = {
  apiUrl: process.env.API_URL,
};
