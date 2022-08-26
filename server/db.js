require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'connkat',
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT
})

module.exports = pool;