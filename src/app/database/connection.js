const knex = require('knex');
const configuration = require('../../../knexfile.js')

const db = knex(configuration);

module.exports = db;