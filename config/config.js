// Load env vars
require('dotenv').config({path: '.env'});

module.exports = {
    apiUrl: process.env.API_URL || 'https://api-test.envia.com/',
    apiToken: process.env.API_TOKEN || 'afbd19e8cb0c3afc20a5ddce847099c2207140db5dc5f19077c967a1447dad59'
};